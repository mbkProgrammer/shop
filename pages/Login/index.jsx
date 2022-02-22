import { Layout } from '../../containers';

const { useTheme } = require('@emotion/react');

const Login = () => {
  const theme = useTheme();
  return (
    <Layout>
      <img src="./Login.jpg" alt="Login_background" />
    </Layout>

  );
};
