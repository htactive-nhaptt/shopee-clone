import PRODUCTS from "./actionTypes";

export const addToCart = (id) => {
  return {
    type: PRODUCTS.ADD_TO_CART,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: PRODUCTS.REMOVE_ITEM,
    id,
  };
};

export const subQuantity = (id) => {
  return {
    type: PRODUCTS.SUB_QUANTITY,
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: PRODUCTS.ADD_QUANTITY,
    id,
  };
};
