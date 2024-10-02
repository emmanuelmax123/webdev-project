import { Product, Appliances, Clothing } from "../../data/products.js";

describe("Test Suite: Testing product class", () => {
  let product;
  beforeEach(() => {
    product = new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    });
  });
  it("should be a product", () => {
    expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(product.extraInfoHTML()).toEqual("");
  });
});

describe("Test Suite: Testing clothing class", () => {
  let clothing;
  beforeEach(() => {
    clothing = new Clothing({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
      type: "clothing",
      sizeChartLink: "images/products/athletic-cotton-socks-6-pairs.jpg",
    });
  });
  it("should be a product", () => {
    expect(clothing.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(clothing.extraInfoHTML()).toContain("Size Chart");
    expect(clothing.priceCents).toEqual(1090);
    expect(clothing.type).toContain("clothing");
    expect(clothing.rating.count).toEqual(87);
    expect(clothing.sizeChartLink).toContain("athletic-cotton-socks");
  });
});

describe("Test Suite: Testing apppliances class", () => {
  let Kettle;
  beforeEach(() => {
    Kettle = new Appliances({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Kettle for test",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
      type: "appliances",
      instructionsLink: "images/products/athletic-cotton-socks-6-pairs.jpg",
      warrantyLink: "images/products/athletic-cotton-socks-6-pairs.jpg",
    });
  });
  it("should be an appliance", () => {
    expect(Kettle.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(Kettle.extraInfoHTML()).toContain("Link");
    expect(Kettle.name).toEqual("Kettle for test");
    expect(Kettle.type).toEqual("appliances");
  });
});
