import { css, cx } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import { Header, Footer } from '..';

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <div className={css`background: ${theme.colors.background}`}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <div className={css`padding-top: 50px; padding-bottom: 60px; position: relative;`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
