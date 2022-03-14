import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../configs/Store';
import theme from '../configs/theme';

const mountWithTheme = (children) => renderer.create(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </Provider>,
);

export default mountWithTheme;
