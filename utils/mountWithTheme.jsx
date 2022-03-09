import { ThemeProvider } from '@emotion/react';
import renderer from 'react-test-renderer';
import theme from '../configs/theme';

const mountWithTheme = (children) => renderer.create(
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>,
);

export default mountWithTheme;
