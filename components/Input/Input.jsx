import { useTheme } from '@emotion/react';
import { css } from '@emotion/css';

const Input = ({
  placeholder,
  size,
  type,
  styles = '',
  onChange,
  error = false,
  errorMassage = 'not valid',
  ...props
}) => {
  const theme = useTheme();

  return (
    <>
      <input
        data-testid="input--test"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        {...props}
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
          &:focus {
            outline: none;
            border: 2px solid ${theme.colors.primary};
          }
          &:hover {
            border: 2px solid ${theme.colors.primary};
            background: none;
          }
          &:disabled {
            background: rgba(100, 100, 100, 0.6);
          }
          &.input--error {
            border: 2px solid ${theme.colors.error};
          }
          &.input--big {
            width: 445px;
            ${styles}
          }
          &.input--small {
            width: 140px;
            ${styles}
          }
          &.input--medium {
            width: 216px;
            ${styles}
          }
          @media (max-width: 480px) {
            &.input--big,
            &.input--small,
            &.input--medium {
              width: 100%;
            }
          }
        `}`}
      />
      {error ? (
        <p
          className={css`
          font-size: 14px;
          color: ${theme.colors.error};
          text-align: left;
        `}
        >
          {errorMassage}
        </p>
      ) : (
        ''
      )}
    </>
  );
};

export default Input;
