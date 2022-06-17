import { css, cx } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import { UserMenu } from '..';

const UserLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <div className="UserLayout">
      <UserMenu />
      <div className="UserLayout__container">
        {children}
      </div>

      <style jsx>
        {`
        .UserLayout {
          display: flex;
          max-width: 100vw;
          overflow: hidden;
        }
        .UserLayout__container {
          margin-left: 290px;
          margin-bottom: 40px;
        }
        @media (max-width: 560px) {
          .UserLayout__container {
            margin-left: 40px;
            margin-bottom: 40px;
          }
        }
      `}
      </style>
    </div>
  );
};

export default UserLayout;
