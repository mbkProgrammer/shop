/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import '../styles/globals.css';
import { useReducer, useEffect } from 'react';
import { jsx, ThemeProvider } from '@emotion/react';
import CartContext from '../context/CartContext';
import CartReducers from '../reducers/Carts';
import useLocalStorage from '../hooks/useLocalStorage';
import theme from '../configs/theme';

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
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={{ carts: state.carts, dispatchCart: dispatch }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
