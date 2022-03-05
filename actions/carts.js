import actionTypes from '../configs/actionTypes';

const ADD_TO_CART_ACTION = (dispatch, { id, quantity }) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    id,
    quantity,
  });
};
const REMOVE_FROM_CART_ACTION = (dispatch, { id }) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    id,
  });
};

const UPDATE_CART = (dispatch, { carts }) => {
  dispatch({
    type: actionTypes.UPDATE_CART,
    carts,
  });
};
const UPDATE_QUANTITY_CART = (dispatch, { id, quantity }) => {
  dispatch({
    type: actionTypes.UPDATE_QUANTITY_CART,
    id,
    quantity,
  });
};

export {
  ADD_TO_CART_ACTION, REMOVE_FROM_CART_ACTION, UPDATE_CART, UPDATE_QUANTITY_CART,
};
