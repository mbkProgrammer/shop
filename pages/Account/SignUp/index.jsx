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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [name, setName] = useState('');
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
  const handleEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const handleNameValue = (e) => {
    setName(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  //  submit form
  const SubmitSignUp = (event) => {
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
      <div className="SignUp">
        <div className="SignUp__tittle">
          <div className="SignUp__tittle__glass">
            <Typography variant="h3" css="text-align: center; color: #fafafa;">
              Sign In To MBK
            </Typography>
            <Typography
              variant="body1"
              css="text-align: center; color: #fafafa;"
            >
              if you have an account, you can sign in
            </Typography>
            <Button varaint="outlined" styles="background: transparent;" onClick={() => router.push('./SignIn')}>
              Sign In
            </Button>
          </div>
        </div>
        <div className="SignUp__form">
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
            styles="background: none; max-width: 100%;"
            onChange={handleEmailValue}
            error={!emailValid}
            errorMassage="E-mail not valid!"
          />
          <Input
            placeholder="Name"
            type="text"
            size="big"
            styles="background: none; max-width: 100%;"
            onChange={handleNameValue}
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
            onClick={SubmitSignUp}
          >
            Sign Up
          </Button>
        </div>
      </div>

      <style jsx>
        {`
          .SignUp {
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
          .SignUp__form {
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 50%;
            position: relative;
          }

          .SignUp__tittle {
            width: 50%;
            background-image: url("/assets/img/Contact.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            height: revert;
            padding: 10px;
          }
          .SignUp__tittle__glass {
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
            .SignUp {
              flex-direction: column-reverse;
              width: 95vw;
            }
            .SignUp__form {
              width: 100%;
              max-width: 100%;
            }
            .SignUp__tittle {
              width: 100%;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default SignUp;
