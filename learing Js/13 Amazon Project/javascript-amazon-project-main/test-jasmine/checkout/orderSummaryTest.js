import renderOrderSummary from "../../scripts/checkout/ordersummary.js";
import { loadFromStorage, cart } from "../../data/cart.js";

describe("test suite: renderOrderSummary", () => {
  const p1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
  const p2 = "83d4ca15-0f35-48f5-b7a3-1ea210004f2e";
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
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(p2);
  });
});
