/* eslint-disable default-param-last */
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import actionTypes from '../configs/actionTypes';

const auth = (state = {}, action) => {
  const cookies = new Cookies();
  switch (action.type) {
    case actionTypes.GET_AUTH_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: false,
      };
    case actionTypes.GET_AUTH_SUCCESS:
      if (action.response[0].length !== 0 && action.response[0].email) {
        cookies.remove('user');
        cookies.set('user', JSON.stringify(action.response[0].access_token), { path: '/' });
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
      if (action.response && action.response.email) {
        cookies.set('user', JSON.stringify(action.response.access_token), { path: '/' });
      }
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

    case actionTypes.VALIDATE_ME_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: false,
      };
    case actionTypes.VALIDATE_ME_SUCCESS:
      if (action.response[0].email) {
        return {
          ...state,
          loading: action.loading,
          response: action.response[0],
          logged: false,
        };
      }
      cookies.remove('user');
      return {
        ...state,
        loading: action.loading,
        response: {},
        logged: false,
      };
    case actionTypes.VALIDATE_ME_FAILED:
      cookies.remove('user');
      return {
        ...state,
        action,
      };
    case actionTypes.LOG_OUT:
      cookies.remove('user');
      return {
        ...state,
        loading: false,
        response: {},
        logged: false,
      };
    default:
      return state;
  }
};

export default auth;
