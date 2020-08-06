import PRODUCTS from "./actionTypes";

const fetchProducts = () => {
  return {
    type: PRODUCTS.FETCH_PRODUCTS,
  };
};

const fetchProductsSucess = (products) => {
  return {
    type: PRODUCTS.FETCH_PRODUCTS_SUCCESS,
    products,
  };
};

const checkoutProducts = () => {
  return {
    type: PRODUCTS.CHECKOUT_PRODUCTS,
  };
};

const checkoutProductsSuccess = (cart) => {
  return {
    type: PRODUCTS.CHECKOUT_PRODUCTS,
    cart,
  };
};

export { fetchProducts, fetchProductsSucess,checkoutProducts,checkoutProductsSuccess };
