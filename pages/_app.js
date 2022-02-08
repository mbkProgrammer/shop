/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import '../styles/globals.css';
import { useReducer } from 'react';
import CartContext from '../context/CartContext';
import CartReducers from '../reducers/Carts';

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(CartReducers, {
    carts: [],
  });
  return (
    <CartContext.Provider value={{ carts: state.carts, dispatchCart: dispatch }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
