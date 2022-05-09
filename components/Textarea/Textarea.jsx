import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

const Textarea = ({
  placeholder, size, onChange, style, ...props
}) => {
  const theme = useTheme();

  return (
    <textarea
      className={`input--${size} ${css`
        height: 80px;
        margin: 5px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
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
          background-image: linear-gradient(${theme.colors.background} 0 0);
        }
        &.input--big {
          width: 445px;
          max-width: 445px;
          min-width: 445px;
        }
        &.input--small {
          width: 140px;
          max-width: 140px;
          min-width: 140px;
        }
        &.input--medium {
          width: 216px;
          max-width: 216px;
          min-width: 216px;
        }
        @media (max-width: 480px) {
          &.input--big,
          &.input--small,
          &.input--medium {
            width: 100%;
            max-width: 100%;
            min-width: 100%;
          }
        }
      `}`}
      placeholder={placeholder}
      data-testid="Textarea--test"
      onChange={onChange}
      {...props}
    />
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
};

Textarea.defaultProps = {
  placeholder: 'placeholder',
  size: 'medium',
};

export default Textarea;
