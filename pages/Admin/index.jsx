import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import { Layout } from '../../containers';

const Admin = () => {
  const theme = useTheme();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
  }, [auth, auth.response]);

  return (
    <Layout>
      <Head>
        <title>
          MBK:
          {' '}
          {auth.response && auth.response.username}
        </title>
      </Head>
    </Layout>
  );
};

export default Admin;
