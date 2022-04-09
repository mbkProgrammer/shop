/* eslint-disable default-param-last */
import actionTypes from '../configs/actionTypes';

const auth = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_AUTH_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      };
    case actionTypes.GET_AUTH_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        response: action.response,
        logged: action.logged,
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
        logged: action.logged,
      };
    case actionTypes.PUT_AUTH_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        response: action.response,
        logged: action.logged,
      };
    case actionTypes.PUT_AUTH_FAILED:
      return {
        ...state,
        action,
      };
    // case actionTypes.SET_AUTH_LOGGED:
    //   return {
    //     ...state,
    //     logged: action.logged,
    //   };
    default:
      return state;
  }
};

export default auth;
