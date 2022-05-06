import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import { Layout } from '../../containers';
import { Button } from '../../components';
import { LOG_OUT_ACTION } from '../../actions';

const Account = () => {
  const theme = useTheme();
  const auth = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.response || !auth.response.email) {
      router.replace('./Account/Auth');
    }
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
      <Button
        onClick={() => LOG_OUT_ACTION(dispatch)}
        size="small"
        styles={`color: ${theme.colors.error};`}
      >
        Log Out
      </Button>
    </Layout>
  );
};

export default Account;
