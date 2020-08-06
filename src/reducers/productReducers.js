import PRODUCTS from "../actions/actionTypes";

const productReducers = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS.FETCH_PRODUCTS_SUCCESS:
      return [...action.products];
    case PRODUCTS.ADD_TO_CART: {
      const newListProduct = [...state];
      const getProduct = newListProduct.find(
        (product) => product.id === action.id
      );
      getProduct.inventory -= 1;
      return newListProduct;
    }
    case PRODUCTS.ADD_QUANTITY: {

      const newListProduct = [...state];
      const getProduct = newListProduct.find(
        (product) => product.id === action.id
      );
      getProduct.inventory -= 1;
      return newListProduct;
    }
    case PRODUCTS.SUB_QUANTITY: {
      const newListProduct = [...state];

      const getProduct = newListProduct.find(
        (product) => product.id === action.id
      );
      getProduct.inventory += 1;
      return newListProduct;
    }
    default:
      return state;
  }
};

export default productReducers;
