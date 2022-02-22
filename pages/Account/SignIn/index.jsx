/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Layout } from '../../../containers';
import { Input, Typography, Button } from '../../../components';
import { validateEmail, validatePassword } from '../../../utils/validaton';
import actionTypes from '../../../configs/actionTypes';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (auth.logged) {
      router.push('./');
    }
  }, [auth.logged]);

  // get form value
  const handleEmailValue = (value) => {
    setEmail(value);
  };
  const handlePasswordValue = (value) => {
    setPassword(value);
  };

  //  submit form
  const SubmitSignIn = (event) => {
    if (event) event.preventDefault();

    if (validatePassword(password) && validateEmail(email)) {
      setPasswordValid(true);
      setEmailValid(true);
      dispatch({
        type: actionTypes.LOGIN,
        logged: true,
        email,
      });

      if (auth.logged) {
        router.push('./');
      }
    } else {
      if (!validateEmail(email)) {
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
      if (!validatePassword(password)) {
        setPasswordValid(false);
      } else {
        setPasswordValid(true);
      }
    }
  };

  return (
    <Layout>
      <div className="SignIn">
        <div className="SignIn__form">
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
            styles="background: none; max-width: 100%;"
            onChange={handleEmailValue}
            error={!emailValid}
            errorMassage="E-mail not valid!"
          />
          <Input
            placeholder="Password"
            type="password"
            size="big"
            styles="background: none; max-width: 100%;"
            onChange={handlePasswordValue}
            error={!passwordValid}
            errorMassage="Password not valid!"
          />
          <Button
            varaint="contained"
            size="big"
            styles="max-width: 100%; width: 445px; margin: 10px;"
            onClick={SubmitSignIn}
          >
            Sign In
          </Button>
        </div>
        <div className="SignIn__tittle">
          <div className="SignIn__tittle__glass">
            <Typography variant="h3" css="text-align: center; color: #fafafa;">
              Create Account
            </Typography>
            <Typography
              variant="body1"
              css="text-align: center; color: #fafafa;"
            >
              Don't have account, you Create Account
            </Typography>
            <Button varaint="outlined" styles="background: transparent;" onClick={() => router.push('./SignUp')}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .SignIn {
            width: 80vw;
            background: ${theme.colors.secondary};
            margin: 30px auto;
            display: flex;
            max-width: 100%;
            justify-content: space-between;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
          }
          .SignIn__form {
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 50%;
            position: relative;
          }

          .SignIn__tittle {
            width: 50%;
            background-image: url("/assets/img/Contact.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            height: revert;
            padding: 10px;
          }
          .SignIn__tittle__glass {
            background: rgba(1, 1, 1, 0.5);
            height: 100%;
            margin: 0;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
          }

          @media (max-width: 600px) {
            .SignIn {
              flex-direction: column-reverse;
              width: 95vw;
            }
            .SignIn__form {
              width: 100%;
              max-width: 100%;
            }
            .SignIn__tittle {
              width: 100%;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default SignIn;
