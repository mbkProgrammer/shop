import { css, cx } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { Header, Footer } from '..';

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <div className={css`background: ${theme.colors.background}`}>
      <Header />
      <div className={css`padding-top: 50px;`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
