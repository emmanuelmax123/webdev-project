import { cart, calculateCartQuantity } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDelievryOption } from "../../data/deliveryoptions.js";
import { formatCurrency } from "../utils/money.js";
import { addOrder } from "../../data/orders.js";

export default function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    const deliveryOption = getDelievryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });
  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const TaxCents = totalBeforeTaxCents * 0.1;
  const totalCent = totalBeforeTaxCents + TaxCents;
  const paymentsummaryHTML = `
  <div class="payment-summary-title">Order Summary</div>
    <div class="payment-summary-row">
      <div>Items (${calculateCartQuantity()}):</div>
      <div class="payment-summary-money js-payment-summary-shipping">$${formatCurrency(
        productPriceCents
      )}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(
        shippingPriceCents
      )}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(
        totalBeforeTaxCents
      )}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(TaxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money js-payment-summary-total">$${formatCurrency(
        totalCent
      )}</div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
    `;
  document.querySelector(".js-payment-summary").innerHTML = paymentsummaryHTML;

  document
    .querySelector(".js-place-order")
    .addEventListener("click", async () => {
      try {
        const response = await fetch("https://supersimplebackend.dev/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: cart,
          }),
        });
        const order = await response.json();
        addOrder(order);
      } catch (error) {
        console.log("unexpected error. Try again later");
      }
      window.location.href = "orders.html";
    });
}
