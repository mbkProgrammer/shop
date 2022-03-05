import { useTheme } from '@emotion/react';
import { css } from '@emotion/css';
import PropTypes, { func } from 'prop-types';

const Input = ({
  placeholder, size, type, styles = '', onChange, error = false, errorMassage = 'not valid',
}) => {
  const theme = useTheme();

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        onChange={handleOnChange}
        className={`input--${size} ${error ? 'input--error' : ''} ${css`
      height: 40px;
      margin: 5px;
      font-size: 1em;
      font-weight: 400;
      line-height: 25px;
      border: 0.5px solid ${theme.colors.primary};
      border-radius: 5px;
      width: 445px;
      transition: 0.3s;
      background: ${theme.colors.secondary};
      ${styles}
      &:focus {
        outline: none;
        border: 2px solid ${theme.colors.primary} ;
      }
      &:hover {
        background-image: linear-gradient(${theme.colors.background} 0 0);
      }
      &.input--error {
        border: 2px solid ${theme.colors.error} ;
      }
      &.input--big{
        width: 445px;
      }
      &.input--small{
        width: 140px;
      }
      &.input--medium{
        width: 216px;
      }
      @media (max-width: 480px){
        &.input--big, &.input--small, &.input--medium{
          width: 100%;
        }
      }
      `}`}
      />
      {error ? (
        <p
          className={css`
          font-size: 14px;
          color: ${theme.colors.error}
          text-align: left;
        `}
        >
          {errorMassage}
        </p>
      ) : ''}
    </>
  );
};

export default Input;
