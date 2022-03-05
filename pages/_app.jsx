/* eslint-disable react/jsx-no-constructed-context-values */
import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import { jsx, ThemeProvider } from '@emotion/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import App from 'next/app';
import useLocalStorage from '../hooks/useLocalStorage';
import theme from '../configs/theme';
import store from '../configs/Store';
import { UPDATE_CART, GET_PRODUCTS_ACTION } from '../actions';

const AppWrapper = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MyApp Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  </Provider>
);

AppWrapper.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store;
  const pageProps = await App.getInitialProps(appContext);

  return {
    ...pageProps,
  };
};

const MyApp = ({ Component, pageProps }) => {
  const [cartsStorage, setCartsStorage] = useLocalStorage('cartsStorage');
  const { carts } = useSelector((state) => state.cart);
  const [cartsInStorage, setCartsInStorage] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (cartsStorage) {
      const cartsTmp = cartsStorage;
      UPDATE_CART(dispatch, { carts: cartsTmp });
    } else {
      UPDATE_CART(dispatch, { carts: [] });
    }
    setCartsInStorage(true);
  }, []);

  useEffect(() => {
    if (cartsInStorage) {
      setCartsStorage(JSON.stringify(carts));
    }
  }, [JSON.stringify(carts)]);

  useEffect(async () => {
    await dispatch(GET_PRODUCTS_ACTION());
  }, []);

  return (
    <Component {...pageProps} />
  );
};

export default AppWrapper;
