import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import Cookies from 'universal-cookie';
import { Layout } from '../../containers';
import WINDOW from '../../utils/window';
import createMyStore from '../../configs/Store';
import { VALIDATE_ME_ACTION } from '../../actions';

const Account = () => {
  const theme = useTheme();
  const auth = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!auth.response || !auth.response.email) {
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

// Account.getInitialProps = async (appContext) => {
//   let cookies = {};
//   if (appContext.req) {
//     cookies = new Cookies(appContext.req.headers.cookie);
//   } else {
//     cookies = new Cookies();
//   }
//   if (cookies.get('user')) {
//     await appContext.reduxStore.dispatch(VALIDATE_ME_ACTION(cookies.get('user')));
//   }
//   const { auth } = appContext.reduxStore.getState();
//   return { auth };
// };
export default Account;
