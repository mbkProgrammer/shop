/* eslint-disable default-param-last */
import actionTypes from '../configs/actionTypes';

const initialState = {
  carts: [],
  delivary: {},
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDERS:
      return {
        ...state,
        carts: action.carts,
        delivary: action.delivary,
        payment: false,
      };
    case actionTypes.SET_ORDERS_PAYMENT:
      return {
        ...state,
        payment: action.payment,
      };
    default:
      return state;
  }
};

export default orders;
