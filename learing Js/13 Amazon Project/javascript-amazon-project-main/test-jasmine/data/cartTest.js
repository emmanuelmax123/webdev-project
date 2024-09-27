import {
  addTocart,
  cart,
  loadFromStorage,
  removeFromCart,
  updateDelievryOption,
} from "../../data/cart.js";

describe("test suite: add to cart", () => {
  beforeEach(() => {
    spyOn(localStorage, "setItem");
  });
  it("add an existing product to cart", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();

    addTocart("15b6fc6f-327a-4ec4-896f-486349e85a3d");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 2,
          deliveryOptionId: "1",
        },
      ])
    );

    expect(cart[0].productId).toEqual("15b6fc6f-327a-4ec4-896f-486349e85a3d");
    expect(cart[0].quantity).toEqual(2);
  });

  it("adds a new product to the cart", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();

    addTocart("15b6fc6f-327a-4ec4-896f-486349e85a3d");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ])
    );
    expect(cart[0].productId).toEqual("15b6fc6f-327a-4ec4-896f-486349e85a3d");
    expect(cart[0].quantity).toEqual(1);
  });
});

describe("Test Suite: Remove from cart", () => {
  beforeEach(() => {
    spyOn(localStorage, "setItem");
  });

  it("removes a product from the cart", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
        {
          productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();

    removeFromCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([
        {
          productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ])
    );
  });

  it("does nothing if product is not in cart", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
        {
          productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();
    removeFromCart("e43638ce-6aa0-4");
    expect(cart.length).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
        {
          productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ])
    );
  });
});

describe("testSuite: update Delvery Option", () => {
  const p1 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
  const p3 = "83d4ca14f2e";
  beforeEach(() => {
    spyOn(localStorage, "setItem");
  });

  it("updates the delivery option", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: p1,
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();
    updateDelievryOption(p1, "3");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(p1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it("updates delivery option if not in cart item", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "p1",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage;
    updateDelievryOption(p3, "3");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(p1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});
