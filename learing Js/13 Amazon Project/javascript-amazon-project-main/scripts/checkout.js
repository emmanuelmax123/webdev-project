import { rendercheckoutHeader } from "./checkout/checkoutHeader.js";
import renderOrderSummary from "./checkout/ordersummary.js";
import renderPaymentSummary from "./checkout/paymentsummary.js";
import { loadProducts } from "../data/products.js";
// import "../data/backend-practice.js";
// import "../data/cart-class.js";
// import "../data/car.js";
loadProducts(() => {
  rendercheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
