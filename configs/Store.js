import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({
  name: 'mbk',
});

const store = createStore(rootReducer, composeEnhancers());

export default store;
