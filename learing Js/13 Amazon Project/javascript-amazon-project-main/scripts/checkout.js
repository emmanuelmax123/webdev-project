import { rendercheckoutHeader } from "./checkout/checkoutHeader.js";
import renderOrderSummary from "./checkout/ordersummary.js";
import renderPaymentSummary from "./checkout/paymentsummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js";
// import "../data/cart-class.js";
// import "../data/car.js";

// code using prommise because we're getting data from the backend

async function loadPage() {
  try {
    await loadProductsFetch();

    const value = await new Promise((resolve) => {
      loadCart(() => {
        resolve("value 3");
      });
    });
  } catch (error) {
    console.log("unexpected error. try again later.");
    console.log(error);
  }

  rendercheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  
]).then(() => {
  rendercheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

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
