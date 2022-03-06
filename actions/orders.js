import actionTypes from '../configs/actionTypes';

const ADD_ORDERS_ACTION = (dispatch, { carts, delivary }) => {
  dispatch({
    type: actionTypes.ADD_ORDERS,
    carts,
    delivary,
  });
};
const SET_ORDERS_PAYMENT_ACTION = (dispatch, { payment }) => {
  dispatch({
    type: actionTypes.SET_ORDERS_PAYMENT,
    payment,
  });
};

export {
  ADD_ORDERS_ACTION,
  SET_ORDERS_PAYMENT_ACTION,
};
