# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

class BookscraperPipeline:
    def process_item(self, item, spider):
        adapter = ItemAdapter(item)

        ##remove all whitespace 
        field_names = adapter.field_names()
        for field_name in field_names:
            if field_name != "description":
                Value = adapter.get(field_name)
                adapter[field_name] = Value[0].strip()

        ##availability ---> only show the numbers of books
        availability_string = adapter.get('availability')
        split_string_array = availability_string.split('(')
        if len(split_string_array)<2:
            adapter["availability"] = 0
        else:
            availability_array = split_string_array[1].split(' ')
            adapter["availability"] = int(availability_array[0])

        #Review --> convert string review into an interger
        review_string = adapter.get('reviews')
        adapter["reviews"] = int(review_string)

        #Stars --> Convert star rating into int
        star_rating = adapter.get("stars")
        star_rating_array = star_rating.split(" ")
        star_text_value = star_rating_array[1].lower()
        if star_text_value == "zero":
            adapter["stars"] = 0
        elif star_text_value == 'one':
            adapter["stars"] = 1
        elif star_text_value == 'two':
            adapter["stars"] = 2
        elif star_text_value == 'three':
            adapter["stars"] = 3
        elif star_text_value == 'four':
            adapter["stars"] = 4
        elif star_text_value == 'five':
            adapter["stars"] = 5
        return item

import mysql.connector

class saveToMySqlPipeline:
    def __init__(self):
        dbpassword = os.getenv('DB_PASSWORD')
        self.conn = mysql.connector.connect(
            host = 'localhost',
            user = 'sqluser',
            password = dbpassword,
            database ="books"   
        )
        
        # create cursor, used to execute commands
        self.cur = self.conn.cursor()

        #create books if none exists(sets up table)
        self.cur.execute("""
        CREATE TABLE IF NOT EXISTS books (
            id int NOT NULL auto_increment,
            url VARCHAR(255),
            title text,
            product_type VARCHAR(255),
            price DECIMAL,
            price_excel_tax DECIMAL,
            price_incl_tax DECIMAL,
            tax DECIMAL,
            availability INTEGER,
            reviews INTEGER,
            stars INTEGER,
            category VARCHAR(255),
            description text,
            PRIMARY KEY(id)
        )
        """)


    def process_item(self, item, spider):
        # Clean price fields
        item['price'] = float(item['price'].replace('£', '').strip())
        item['price_excel_tax'] = float(item['price_excel_tax'].replace('£', '').strip())
        item['price_incl_tax'] = float(item['price_incl_tax'].replace('£', '').strip())
        item['tax'] = float(item['tax'].replace('£', '').strip())

        # Define insert statement
        self.cur.execute(""" insert into books (
            url, 
            title, 
            product_type, 
            price,
            price_excel_tax,
            price_incl_tax,
            tax, 
            availability,
            reviews,
            stars,
            category,
            description
            ) values (
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s
                )""", (
            item["url"],
            item["title"],
            item["product_type"],
            item["price"],
            item["price_excel_tax"],
            item["price_incl_tax"],
            item["tax"],
            item["availability"],
            item["reviews"],
            item["stars"],
            item["category"],
            str(item["description"][0])
        ))

        # Execute insert of data into database
        self.conn.commit()
        return item

    
    def close_spider(self, spider):
        ## Close cursor & connection to database 
        self.cur.close()
        self.conn.close()