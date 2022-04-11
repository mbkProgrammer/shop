import reduxCall from '../utils/reduxCall';
import actionTypes from '../configs/actionTypes';

const GET_AUTH_ACTION = (body) => async (dispatch) => reduxCall(dispatch, {
  url: 'https://621a25d381d4074e85ba9ca0.mockapi.io/auth',
  method: 'POST',
  name: 'GET_AUTH',
  body,
});
const PUT_AUTH_ACTION = (body) => async (dispatch) => reduxCall(dispatch, {
  url: 'https://621a25d381d4074e85ba9ca0.mockapi.io/auth',
  method: 'POST',
  name: 'PUT_AUTH',
  body,
});

export { GET_AUTH_ACTION, PUT_AUTH_ACTION };
