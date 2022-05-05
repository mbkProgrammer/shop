import reduxCall from '../utils/reduxCall';
import actionTypes from '../configs/actionTypes';

const GET_AUTH_ACTION = (email, password) => async (dispatch) => reduxCall(dispatch, {
  url: `https://621a25d381d4074e85ba9ca0.mockapi.io/users?email=${email}&password=${password}`,
  method: 'GET',
  name: 'GET_AUTH',
});
const PUT_AUTH_ACTION = (body) => async (dispatch) => reduxCall(dispatch, {
  url: 'https://621a25d381d4074e85ba9ca0.mockapi.io/users',
  method: 'POST',
  name: 'PUT_AUTH',
  body,
});
const VALIDATE_ME_ACTION = (token) => async (dispatch) => reduxCall(dispatch, {
  url: `https://621a25d381d4074e85ba9ca0.mockapi.io/users?access_token=${token}`,
  method: 'GET',
  name: 'VALIDATE_ME',
});
const LOG_OUT_ACTION = (dispatch) => {
  dispatch({
    type: actionTypes.LOG_OUT,
  });
};

export {
  GET_AUTH_ACTION, PUT_AUTH_ACTION, VALIDATE_ME_ACTION, LOG_OUT_ACTION,
};
