export function getAddedIds(cart) {
  return Object.keys(cart);
}

export function getQuantity(cart, id) {
  return cart[id] || 0;
}

export function getProduct(products, id) {
  return products.find((product) => product.id === id);
}

export function getProductsFromCart(state) {
  return getAddedIds(state.cart).map((id) => {
    return {
      ...getProduct(state.products, id),
      quantity: getQuantity(state.cart, id),
    };
  });
}

export function getTotal(cart = {}) {
  let total = 0;
  for (const property in cart) {
    total += cart[property];
  }
  return total;
}

export function allItemsPrice(items = []) {
 
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

