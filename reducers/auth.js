/* eslint-disable default-param-last */
import { toast } from 'react-toastify';
import actionTypes from '../configs/actionTypes';

const auth = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_AUTH_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: false,
      };
    case actionTypes.GET_AUTH_SUCCESS:
      if (action.response.length !== 0) {
        toast.success('You have successfully logged !');
      } else {
        toast.error('Data its not true !');
      }
      return {
        ...state,
        loading: action.loading,
        response: action.response[0],
        logged: false,
      };

    case actionTypes.GET_AUTH_FAILED:

      return {
        ...state,
        action,
      };
    case actionTypes.PUT_AUTH_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: false,
      };
    case actionTypes.PUT_AUTH_SUCCESS:
      toast.success('Account succesfully created !');
      return {
        ...state,
        loading: action.loading,
        response: action.response,
        logged: true,
      };
    case actionTypes.PUT_AUTH_FAILED:
      return {
        ...state,
        action,
      };
    default:
      return state;
  }
};

export default auth;
