import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../../containers';

const Account = () => {
  const theme = useTheme();
  const auth = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!auth.logged) {
      router.push('./Account/SignUp');
    }
  }, []);

  return (
    <Layout />
  );
};

export default Account;
