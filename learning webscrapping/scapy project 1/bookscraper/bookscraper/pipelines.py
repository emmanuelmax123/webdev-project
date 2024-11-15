# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


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
