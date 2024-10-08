import {
  cart,
  removeFromCart,
  calculateCartQuantity,
  updateQuantity,
} from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import formatCurrency from "../utils/money.js";

import { updateDelievryOption } from "../../data/cart.js";
import {
  deliveryOptions,
  getDelievryOption,
  calculateDeliveryDate,
} from "../../data/deliveryoptions.js";
import renderPaymentSummary from "./paymentsummary.js";
import { rendercheckoutHeader } from "./checkoutHeader.js";

export default function renderOrderSummary() {
  let cartsummaryHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingproduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;
    const deliveryOption = getDelievryOption(deliveryOptionId);
    const dateString = calculateDeliveryDate(deliveryOption);

    cartsummaryHTML += `<div class="cart-item-container js-cart-item-container js-cart-item-container-${
      matchingproduct.id
    }">
              <div class="delivery-date">Delivery date: ${dateString}</div>
              <div class="cart-item-details-grid">
                <img
                  class="product-image"
                  src="${matchingproduct.image}"
                />
                <div class="cart-item-details">
                  <div class="product-name js-product-name-${
                    matchingproduct.id
                  }">
                    ${matchingproduct.name}
                  </div>
                  <div class="product-price js-product-price-${
                    matchingproduct.id
                  }">${matchingproduct.getPrice()}</div>
                  <div class="product-quantity js-product-quantity-${
                    matchingproduct.id
                  }">
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
                    <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${
                      matchingproduct.id
                    }" data-product-id="${matchingproduct.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionsHtml(matchingproduct, cartItem)}
                </div>
              </div>
            </div>`;
  });

  function deliveryOptionsHtml(matchingproduct, cartItem) {
    let html = "";
    deliveryOptions.forEach((deliveryOption) => {
      const dateString = calculateDeliveryDate(deliveryOption);

      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatCurrency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      html += `
        <div class="delivery-option js-delivery-option js-delivery-option-${
          matchingproduct.id
        }-${deliveryOption.id}" data-product-id='${
        matchingproduct.id
      }' data-delivery-option-id='${deliveryOption.id}'>
        <input
            type="radio" ${isChecked ? "checked" : ""}
            class="delivery-option-input js-delivery-option-input-${
              matchingproduct.id
            }-${deliveryOption.id}"
            name="delivery-option-${matchingproduct.id}"/>
          <div>
            <div class="delivery-option-date">${dateString}</div>
            <div class="delivery-option-price">${priceString} Shipping</div>
          </div>
        </div>
      `;
    });
    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartsummaryHTML;
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      // update the data
      removeFromCart(productId);
      rendercheckoutHeader();
      renderOrderSummary();
      renderPaymentSummary();
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

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      // uses shorthand property....see 14h:50.30
      updateDelievryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
