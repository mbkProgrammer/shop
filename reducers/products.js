/* eslint-disable default-param-last */
import { GET_PRODUCTS_ACTION } from '../actions';
import actionTypes from '../configs/actionTypes';

const products = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_STARTED:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        products: action.response,
      };
    case actionTypes.GET_PRODUCTS_FAILED:
      return {
        ...state,
        action,
      };
    case actionTypes.ADD_PRODUCTS_STARTED:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.ADD_PRODUCTS_FAILED:
      return {
        ...state,
        action,
      };
    case actionTypes.DELETE_PRODUCTS_STARTED:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.DELETE_PRODUCTS_SUCCESS:
      GET_PRODUCTS_ACTION();
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.DELETE_PRODUCTS_FAILED:
      return {
        ...state,
        action,
      };
    default:
      return state;
  }
};

export default products;
