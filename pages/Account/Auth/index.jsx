/* eslint-disable no-nested-ternary */
/* eslint-disable quote-props */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { async } from 'regenerator-runtime';
import { Layout } from '../../../containers';
import { Input, Typography, Button } from '../../../components';
import { validateEmail, validatePassword } from '../../../utils/validaton';
import { GET_AUTH_ACTION, PUT_AUTH_ACTION } from '../../../actions';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [authType, setAuthType] = useState('');

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    console.log('auth', auth);
    if (auth.response && auth.response.length !== 0) {
      setAuthType('login');
    } else if (auth.response && auth.response.length === 0) {
      setAuthType('signUp');
    }
  }, [auth, auth.response]);

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

  const SubmitEmail = async (event) => {
    if (event) event.preventDefault();
    if (validateEmail(email)) {
      dispatch(GET_AUTH_ACTION(email));
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  //  submit form
  const SubmitAuth = (event) => {
    // if (event) event.preventDefault();

    // if (validatePassword(password)) {
    //   setPasswordValid(true);
    //   switch (authType) {
    //     case 'signUp':
    //       dispatch(
    //         PUT_AUTH_ACTION({
    //           user_name: name,
    //           email,
    //           password,
    //         }),
    //       );
    //       break;
    //     case 'login':
    //       if (auth.auth) {
    //         setPasswordValid(true);
    //       } else {
    //         setPasswordValid(false);
    //       }
    //       break;

    //     default:
    //   }
    // } else {
    //   setPasswordValid(false);
    // }
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
              placeholder="Name"
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
          </div>
        ) : authType === 'login' ? (
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
              Login to mbk
            </Typography>
            <Input
              placeholder="Enter your E-mail"
              type="email"
              size="big"
              styles="background: none; max-width: 100%; color: #fafafa; &::placeholder {color: #fafafa;}"
              onChange={handleEmailValue}
              error={!emailValid}
              errorMassage="E-mail not valid!"
            />
            <Button
              varaint="contained"
              size="big"
              styles="max-width: 100%; width: 445px; margin: 10px;"
              onClick={SubmitEmail}
            >
              Submit
            </Button>
          </div>
        )}
      </div>

      <style jsx>
        {`
          .Auth {
            width: 80vw;
            height: 50vh;
            margin: 30px auto;
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
            background: rgba(1, 1, 1, 0.5);
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
