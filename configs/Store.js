import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Cookies from 'universal-cookie';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({
  name: 'mbk',
});

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk)),
// );

const createMyStore = () => {
  const cookies = new Cookies();
  let init = {};
  if (cookies.get('redux-store')) {
    init = cookies.get('redux-store');
  }
  const store = createStore(
    rootReducer,
    init,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};

export default createMyStore;
