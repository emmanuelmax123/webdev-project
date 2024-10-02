import renderOrderSummary from "../../scripts/checkout/ordersummary.js";
import {
  loadFromStorage,
  cart,
  updateDelievryOption,
} from "../../data/cart.js";
import { loadProducts } from "../../data/products.js";

describe("test suite: renderOrderSummary", () => {
  const p1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
  const p2 = "83d4ca15-0f35-48f5-b7a3-1ea210004f2e";

  // testing with backend, we wait to recieve the info and call done to get to the rest of the code
  beforeAll((done) => {
    loadProducts(() => {
      done();
    });
  });
  // before each code runs do this
  beforeEach(() => {
    spyOn(localStorage, "setItem");
    document.querySelector(".js-test-container").innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-current-items"></div>
      <div class="js-header-content"></div>
      <div class="js-payment-summary"></div>
      <div class="js-current-items"></div>`;

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: p1,
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: p2,
          quantity: 1,
          deliveryOptionId: "2",
        },
      ]);
    });
    loadFromStorage();

    renderOrderSummary();
  });
  // after each code has run clear the html
  afterEach(() => {
    document.querySelector(".js-test-container").innerHTML = ``;
  });

  it("displays the cart", () => {
    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(
      2
    );
    expect(
      document.querySelector(`.js-product-quantity-${p1}`).innerText
    ).toContain("Quantity: 2");
    expect(
      document.querySelector(`.js-product-quantity-${p2}`).innerText
    ).toContain("Quantity: 1");

    expect(document.querySelector(`.js-product-name-${p1}`).innerText).toEqual(
      "Black and Gray Athletic Cotton Socks - 6 Pairs"
    );
    expect(document.querySelector(`.js-product-name-${p2}`).innerText).toEqual(
      "Adults Plain Cotton T-Shirt - 2 Pack"
    );
  });

  it("removes a product", () => {
    document.querySelector(`.js-delete-link-${p1}`).click();
    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(
      1
    );
    expect(document.querySelector(`.js-cart-item-container-${p1}`)).toEqual(
      null
    );
    expect(document.querySelector(`.js-cart-item-container-${p2}`)).not.toEqual(
      null
    );
    expect(document.querySelector(`.js-product-name-${p2}`).innerText).toEqual(
      "Adults Plain Cotton T-Shirt - 2 Pack"
    );
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(p2);
  });

  it("checks if the price matches", () => {
    expect(document.querySelector(`.js-product-price-${p1}`).innerText).toEqual(
      `$10.90`
    );

    expect(document.querySelector(`.js-product-price-${p2}`).innerText).toEqual(
      `$7.99`
    );
  });

  it("updates the delivery options", () => {
    document.querySelector(`.js-delivery-option-${p1}-3`).click();
    expect(
      document.querySelector(`.js-delivery-option-input-${p1}-3`).checked
    ).toEqual(true);

    expect(cart.length).toEqual(2);
    expect(cart[0].productId).toEqual(p1);
    expect(cart[0].deliveryOptionId).toEqual("3");
    expect(
      document.querySelector(".js-payment-summary-shipping").innerText
    ).toEqual("$29.79");
    expect(
      document.querySelector(".js-payment-summary-total").innerText
    ).toEqual("$49.25");
  });

  it("do nothing if you input an delivery option", () => {
    // Error: <spyOn> : getItem has already been spied upon
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 2,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();
    updateDelievryOption("15b6fc6f-327a-4ec4-896f-486349e85a3d", "5");
    expect(cart.length).toEqual(1);
    expect(cart.quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});
