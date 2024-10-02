import { rendercheckoutHeader } from "./checkout/checkoutHeader.js";
import renderOrderSummary from "./checkout/ordersummary.js";
import renderPaymentSummary from "./checkout/paymentsummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js";
// import "../data/cart-class.js";
// import "../data/car.js";

// code using prommise because we're getting data from the backend

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  rendercheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// })
//   .then(() => {
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     rendercheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

// code using callback

// loadProducts(() => {
//   loadCart(() => {
//     rendercheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
