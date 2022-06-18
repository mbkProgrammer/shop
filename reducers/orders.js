/* eslint-disable default-param-last */
import { useDispatch } from 'react-redux';
import { GET_ORDERS_ACTION } from '../actions/orders';
import actionTypes from '../configs/actionTypes';

const orders = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS_STARTED:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        response: action.response,
      };
    case actionTypes.GET_ORDERS_FAILED:
      return {
        ...state,
        action,
      };
    case actionTypes.ADD_ORDERS_STARTED:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.ADD_ORDERS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.ADD_ORDERS_FAILED:
      return {
        ...state,
        action,
      };
    case actionTypes.ADD_ADMIN_ORDERS_STARTED:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.ADD_ADMIN_ORDERS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.ADD_ADMIN_ORDERS_FAILED:
      return {
        ...state,
        action,
      };
    default:
      return state;
  }
};

export default orders;
