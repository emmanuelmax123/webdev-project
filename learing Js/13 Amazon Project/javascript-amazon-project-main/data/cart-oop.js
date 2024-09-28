import { validDeliveryOption } from "./deliveryoptions.js";

function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,

    // this is now a Method because we have a function inside an object
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
      // this changes the "cart" from string back to an array (this is due to it beign saved in local storage)

      if (!this.cartItems) {
        this.cartItems = [
          {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: "1",
          },
          {
            productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
            quantity: 1,
            deliveryOptionId: "2",
          },
        ];
      }
    },
    saveToStorage() {
      // converts cart into a sting so it can be saved in local storage
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

    addTocart(productId) {
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
      if (matchingItem) {
        matchingItem.quantity++;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: "1",
        });
      }
      this.saveToStorage();
    },

    removeFromCart(productId) {
      const newCart = [];
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
      this.cartItems = newCart;
      this.saveToStorage();
    },

    calculateCartQuantity() {
      let cartQuantity = 0;

      this.cartItems.forEach((cartItem) => {
        // console.log(cartQuantity);
        cartQuantity += cartItem.quantity;
      });
      return cartQuantity;
    },

    updateQuantity(productId, newQuantity) {
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
      matchingItem.quantity = newQuantity;
      this.saveToStorage();
    },

    updateDelievryOption(productId, deliveryOptionId) {
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
      if (!matchingItem) {
        return;
      }

      if (!validDeliveryOption(deliveryOptionId)) {
        return;
      }
      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    },
  };
  return cart;
}

const cart = Cart("cart-oop");
const businessCart = Cart("cart-business");

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
