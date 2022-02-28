/* eslint-disable react/jsx-no-constructed-context-values */
import '../styles/globals.css';
import React, { useReducer, useEffect } from 'react';
import { jsx, ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import CartContext from '../context/CartContext';
import useLocalStorage from '../hooks/useLocalStorage';
import theme from '../configs/theme';
import store from '../configs/Store';

function MyApp({ Component, pageProps }) {
  const [cartsStorage, setCartsStorage] = useLocalStorage('cartsStorage');

  // useEffect(() => {
  //   if (cartsStorage) {
  //     const cartsTmp = cartsStorage;
  //     dispatch({
  //       type: 'UPDATE_CART',
  //       carts: cartsTmp,
  //     });
  //   } else {
  //     dispatch({
  //       type: 'UPDATE_CART',
  //       carts: [],
  //     });
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
