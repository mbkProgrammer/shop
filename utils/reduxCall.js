import actionTypes from '../configs/actionTypes';
import fetchURL from './fetchURL';

const reduxCall = async (dispatch, {
  url, method, name, body,
}) => {
  dispatch({
    type: actionTypes[`${name}_STARTED`],
    loading: true,
    logged: true,
  });
  try {
    const response = await fetchURL({ url, method, body });
    dispatch({
      type: actionTypes[`${name}_SUCCESS`],
      logged: true,
      loading: false,
      response,
    });
  } catch (e) {
    console.error('error', e);
    dispatch({
      type: actionTypes[`${name}_FAILED`],
      logged: false,
      loading: false,
      error: true,
    });
  }
};
export default reduxCall;
