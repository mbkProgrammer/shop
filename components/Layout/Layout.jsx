import { css, cx } from '@emotion/css';
import { Header, Footer } from '..';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={css`padding-top: 50px`}>
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;
