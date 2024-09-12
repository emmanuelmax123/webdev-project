import {
  cart,
  removeFromCart,
  calculateCartQuantity,
  updateQuantity,
} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let cartsummaryHTML = "";

cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingproduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingproduct = product;
    }
  });

  cartsummaryHTML += `<div class="cart-item-container js-cart-item-container-${
    matchingproduct.id
  }">
            <div class="delivery-date">Delivery date: Tuesday, June 21</div>

            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src="${matchingproduct.image}"
              />

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingproduct.name}
                </div>
                <div class="product-price">$${formatCurrency(
                  matchingproduct.priceCents
                )}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label js-quantity-label-${
                    matchingproduct.id
                  }">${cartItem.quantity}</span> </span>
                  <span class="update-quantity-link link-primary js-updateLinks" data-product-id="${
                    matchingproduct.id
                  }">
                    Update
                  </span>
                  <input type="text" class="quantity-input js-quantity-input-${
                    matchingproduct.id
                  }">
                  <span class="save-quantity-input quantity-input link-primary"data-product-id="${
                    matchingproduct.id
                  }">Save</span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                    matchingproduct.id
                  }">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingproduct.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingproduct.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingproduct.id}"
                  />
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
});

document.querySelector(".js-order-summary").innerHTML = cartsummaryHTML;
document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;

    console.log(productId);
    removeFromCart(productId);
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.remove();
    updateCartQuantity();
  });
});

function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();
  document.querySelector(
    ".js-current-items"
  ).innerHTML = `${cartQuantity} items`;
}

updateCartQuantity();

document.querySelectorAll(".js-updateLinks").forEach((update) => {
  update.addEventListener("click", () => {
    const productId = update.dataset.productId;
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.classList.add("is-editing-quantity");
  });
});

document.querySelectorAll(".save-quantity-input").forEach((save) => {
  save.addEventListener("click", () => {
    handelSave(save);
  });
});

document.querySelectorAll(".js-quantity-input").forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handelSave(input); // Pass the input instead of the save button
    }
  });
});

function handelSave(element) {
  const productId = element.dataset.productId; // dataset for Save button or input
  const container = document.querySelector(
    `.js-cart-item-container-${productId}`
  );
  container.classList.remove("is-editing-quantity");

  // The input element is retrieved in both cases, whether from Save button or Enter key press
  const quantityInput = document.querySelector(
    `.js-quantity-input-${productId}`
  );
  const newQuantity = Number(quantityInput.value);

  updateQuantity(productId, newQuantity);
  const quantityLabel = document.querySelector(
    `.js-quantity-label-${productId}`
  );
  quantityLabel.innerHTML = newQuantity;
  updateCartQuantity();
  console.log(productId);
}
