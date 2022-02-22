/* eslint-disable react/jsx-no-constructed-context-values */
import '../styles/globals.css';
import React, { useReducer, useEffect } from 'react';
import { jsx, ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import CartContext from '../context/CartContext';
import CartReducers from '../reducers/Carts';
import useLocalStorage from '../hooks/useLocalStorage';
import theme from '../configs/theme';
import store from '../configs/Store';

function MyApp({ Component, pageProps }) {
  const [cartsStorage, setCartsStorage] = useLocalStorage('cartsStorage');

  const [state, dispatch] = useReducer(CartReducers, {
    carts: [],
  });

  useEffect(() => {
    if (cartsStorage) {
      const cartsTmp = cartsStorage;
      dispatch({
        type: 'UPDATE_CART',
        carts: cartsTmp,
      });
    } else {
      dispatch({
        type: 'UPDATE_CART',
        carts: [],
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={{ carts: state.carts, dispatchCart: dispatch }}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
