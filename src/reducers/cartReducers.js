import PRODUCTS from "../actions/actionTypes";

const cartReducers = (state = {}, action) => {
  const { id } = action;

  switch (action.type) {
    case PRODUCTS.ADD_TO_CART: {
      return {
        ...state,
        [id]: (state[id] || 0) + 1,
      };
    }
    case PRODUCTS.REMOVE_ITEM: {
      const newCart = { ...state };
      delete newCart[id];
      return newCart;
    }
    case PRODUCTS.SUB_QUANTITY: {
      const qty = (state[id] || 0) - 1;
      const newCart = { ...state };
      if (qty > 0) newCart[id] = qty;
      else delete newCart[id];
      return newCart;
    }
    case PRODUCTS.ADD_QUANTITY: {
      return {
        ...state,
        [id]: (state[id] || 0) + 1,
      };
    }
    case PRODUCTS.CHECKOUT_PRODUCTS_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default cartReducers;
