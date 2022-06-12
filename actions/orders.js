import actionTypes from '../configs/actionTypes';
import reduxCall from '../utils/reduxCall';

const ADD_ORDERS_ACTION = (userId, body) => async (dispatch) => reduxCall(dispatch, {
  url: `https://6298c1d4de3d7eea3c6f657b.mockapi.io/users/${userId}/order`,
  method: 'POST',
  name: 'ADD_ORDERS',
  body,
});
const GET_ORDERS_ACTION = (userId) => async (dispatch) => reduxCall(dispatch, {
  url: `https://6298c1d4de3d7eea3c6f657b.mockapi.io/users/${userId}/order`,
  method: 'GET',
  name: 'GET_ORDERS',
});

export {
  ADD_ORDERS_ACTION, GET_ORDERS_ACTION,
};
