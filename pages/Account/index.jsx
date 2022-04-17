import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import { Layout } from '../../containers';
import WINDOW from '../../utils/window';

const Account = () => {
  const theme = useTheme();
  const auth = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!auth.response || auth.response.length === 0) {
      router.push('./Account/Auth');
    }
  }, []);

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

Account.getInitialProps = async ({ reduxStore }) => {
  const { auth } = reduxStore.getState();
  if (!auth.response || auth.response.length === 0) {
    WINDOW.location = './Account/Auth';
  }

  return {
    // auth,
  };
};

export default Account;
