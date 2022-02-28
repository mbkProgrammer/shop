import reduxCall from '../utils/reduxCall';
import actionTypes from '../configs/actionTypes';

const GET_PRODUCTS_ACTION = () => async (dispatch) => reduxCall(dispatch, {
  url: 'https://621a25d381d4074e85ba9ca0.mockapi.io/Products',
  method: 'GET',
  name: 'GET_PRODUCTS',
});

export default GET_PRODUCTS_ACTION;
