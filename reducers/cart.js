/* eslint-disable no-case-declarations */
/* eslint-disable prefer-const */
/* eslint-disable default-param-last */
import actionTypes from '../configs/actionTypes';

const initialState = {
  carts: [],
};

const cart = (state = initialState, action) => {
  let newCarts = state.carts;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        carts: [...state.carts, { id: action.id, quantity: action.quantity }],
      };
    case actionTypes.REMOVE_FROM_CART:
      const removeIndex = state.carts.findIndex((cartId) => cartId.id === action.id);
      if (removeIndex !== -1) {
        newCarts.splice(removeIndex, 1);
      } else {
        newCarts = state.carts;
      }
      return {
        ...state,
        carts: newCarts,
      };
    case actionTypes.UPDATE_CART:
      return {
        carts: action.carts,
      };
    case actionTypes.UPDATE_QUANTITY_CART:
      const cartIndex = state.carts.findIndex((cartId) => cartId.id === action.id);
      if (cartIndex !== -1) {
        newCarts[cartIndex].quantity = action.quantity;
      } else {
        newCarts = state.carts;
      }
      return {
        ...state,
        carts: newCarts,
      };
    default:
      return state;
  }
};

export default cart;
