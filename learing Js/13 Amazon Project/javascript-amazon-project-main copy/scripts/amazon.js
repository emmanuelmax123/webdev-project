let productsHTML = "";

products.forEach((product) => {
  productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">$${(product.priceCents / 100).toFixed(
            2
          )}</div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
            product.id
          }">Add to Cart</button>
        </div>`;
});

document.querySelector(".js-productGrid").innerHTML = productsHTML;

// this is used for timeout it is declared outside of the click, we use an object to save mutiple timeout
const addMessageTimeouts = {};

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.dataset);
    // const productId = button.dataset.productId; a simplified version below
    const { productId } = button.dataset;

    let matchingItem;
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
    // took the numbers(value) from the selector convert it into number becuase js turn everything to string
    const quantity = Number(
      document.querySelector(`.js-quantity-selector-${productId}`).value
    );
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        // productId: productId,
        // quantity: quantity,
        productId,
        quantity,
      });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
    const addVisible = document.querySelector(`.js-added-to-cart-${productId}`);
    addVisible.classList.add("add-visible");

    const previousTimeout = addMessageTimeouts[productId];
    // this check if productId has an id timeout in the addMessageTimeout and pushes the old timeout into the previousTimeout
    if (previousTimeout) {
      clearTimeout(previousTimeout);
    }

    const timeoutId = setTimeout(() => {
      addVisible.classList.remove("add-visible");
    }, 2000);

    addMessageTimeouts[productId] = timeoutId;
    // we add an id of the recent timeout into the addMessageTimeout
  });
});
