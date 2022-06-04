/* eslint-disable no-nested-ternary */
/* eslint-disable quote-props */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { async } from 'regenerator-runtime';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import { Layout } from '../../../containers';
import { Input, Typography, Button } from '../../../components';
import { validateEmail, validatePassword } from '../../../utils/validaton';
import { GET_AUTH_ACTION, PUT_AUTH_ACTION, VALIDATE_ME_ACTION } from '../../../actions';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [authType, setAuthType] = useState('signUp');

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (auth.response && auth.response.email) {
      if (auth.response.type === 'user') {
        router.replace('./');
      } else {
        router.replace('../Admin');
      }
    }
  }, [auth, auth.response, router]);

  // get form value
  const handleEmailValue = (e) => {
    if (e) e.preventDefault();
    setEmail(e.target.value);
  };
  const handleNameValue = (e) => {
    setName(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  //  submit form
  const SubmitAuth = (event) => {
    if (event) event.preventDefault();

    if (validatePassword(password) && validateEmail(email)) {
      setPasswordValid(true);
      switch (authType) {
        case 'signUp':
          dispatch(
            PUT_AUTH_ACTION({
              username: name,
              email,
              password,
            }),
          );
          break;
        case 'login':
          dispatch(
            GET_AUTH_ACTION(email, password),
          );
          break;
        default:
      }
    } else if (validatePassword(password)) {
      setPasswordValid(true);
      setEmailValid(false);
    } else if (validateEmail(email)) {
      setPasswordValid(false);
      setEmailValid(true);
    } else {
      setPasswordValid(true);
      setEmailValid(true);
    }
  };

  return (
    <Layout>

      <div className="Auth">
        {authType === 'signUp' ? (
          <div className="Auth__form">
            <Typography
              variant="h2"
              css={`
                text-align: center;
                color: ${theme.colors.primary};
                padding: 20px 0;
              `}
            >
              Create Account
            </Typography>
            <Input
              placeholder="E-mail"
              type="email"
              size="big"
              styles="background: none; max-width: 100%; color: #fafafa; &::placeholder {color: #fafafa;}"
              onChange={handleEmailValue}
              error={!emailValid}
              errorMassage="E-mail not valid!"
            />
            <Input
              placeholder="Username"
              type="text"
              size="big"
              styles="background: none; max-width: 100%; color: #fafafa; &::placeholder {color: #fafafa;}"
              onChange={handleNameValue}
            />
            <Input
              placeholder="Password"
              type="password"
              size="big"
              styles="background: none; max-width: 100%; color: #fafafa; &::placeholder {color: #fafafa;}"
              onChange={handlePasswordValue}
              error={!passwordValid}
              errorMassage="Password not valid!"
            />
            <Button
              varaint="contained"
              size="big"
              styles="max-width: 100%; width: 445px; margin: 10px;"
              onClick={SubmitAuth}
            >
              Sign Up
            </Button>
            <Button
              varaint="text"
              size="big"
              styles="max-width: 100%; width: 445px; margin: 10px; text-align: left; padding: 8px 25px;"
              onClick={() => setAuthType('login')}
            >
              Do you have account: Login
            </Button>
          </div>
        ) : (
          <div className="Auth__form">
            <Typography
              variant="h2"
              css={`
                text-align: center;
                color: ${theme.colors.primary};
                padding: 20px 0;
              `}
            >
              Sign In To MBK
            </Typography>
            <Input
              placeholder="E-mail"
              type="email"
              size="big"
              styles="background: none; max-width: 100%; color: #fafafa; &::placeholder {color: #fafafa;}"
              onChange={handleEmailValue}
              error={!emailValid}
              errorMassage="E-mail not valid!"
            />
            <Input
              placeholder="Password"
              type="password"
              size="big"
              styles="background: none; max-width: 100%; color: #fafafa; &::placeholder {color: #fafafa;}"
              onChange={handlePasswordValue}
              error={!passwordValid}
              errorMassage="Password not valid!"
            />
            <Button
              varaint="contained"
              size="big"
              styles="max-width: 100%; width: 445px; margin: 10px;"
              onClick={SubmitAuth}
            >
              Sign In
            </Button>
            <Button
              varaint="text"
              size="big"
              styles="max-width: 100%; width: 445px; margin: 10px; text-align: left; padding: 8px 25px;"
              onClick={() => setAuthType('signUp')}
            >
              Don't have account: signUp
            </Button>
          </div>
        )}

      </div>

      <style jsx>
        {`
          .Auth {
            width: 80vw;
            height: fix-content;
            margin: 30px auto;
            padding: 10px;
            display: flex;
            max-width: 100%;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            background-image: url("/assets/img/Contact.jpg");
          }
          .Auth__form {
            padding: 10px;
            margin: 10px;
            display: flex;
            flex-direction: column;
            background: rgba(60, 60, 60, 0.5);
            border-radius: 8px;
            box-shadow: 0 0 10 rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(5px);
            align-items: center;
            position: relative;
          }

          @media (max-width: 600px) {
            .Auth {
              flex-direction: column-reverse;
              width: 95vw;
            }
            .Auth__form {
              width: 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </Layout>
  );
};
export default Auth;
