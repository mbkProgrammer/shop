import { css, cx } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import { AdminMenu } from '..';

const AdminLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <div className="AdminLayout">
      <AdminMenu />
      <div className="AdminLayout__container">
        {children}
      </div>

      <style jsx>
        {`
        .AdminLayout {
          display: flex;
          max-width: 100vw;
          overflow: hidden;
        }
        .AdminLayout__container {
          margin-left: 20px;
          margin-bottom: 40px;
        }
      `}
      </style>
    </div>
  );
};

export default AdminLayout;
