import { css, cx } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import { AdminMenu } from '..';

const AdminLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <div className="AdminLayout">
      <AdminMenu />
      <div>
        {children}
      </div>

      <style jsx>
        {`
        display: flex;
        max-width: 100vw;
        overflow: hidden;
      `}
      </style>
    </div>
  );
};

export default AdminLayout;
