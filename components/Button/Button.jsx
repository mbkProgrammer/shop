import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = ({
  varaint, children, onClick, size = 'medium',
}) => {
  const theme = useTheme();

  const Button = styled.button`
  border-radius: 5px;
  color: ${theme.colors.primary};
  width: fit-content;
  font-size: 19px;
  font-weight: 400;
  border: none;
  border-radius: 5px;
  margin: 5px;
  transition: 0.3s;
  &.btn--text {
    color: ${theme.colors.text};
    background: none;
  }
  &.btn--outlined {
    border: 1px solid;
    background: ${theme.colors.secondary};
  }
  &.btn--outlined:hover {
    border: 1px solid;
    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  }

  &.btn--contained {
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: #fafafa;
  }
  &.btn--contained:hover, &.btn--text:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
  }
  &.btn--big {
    padding: 8px 74px;
    min-width: fit-content;
    max-width: 100%;
  }

  &.btn--small {
    padding: 8px 24px;
  }

  &.btn--medium {
    padding: 8px 44px;
  }

  `;

  return <Button className={`btn--${varaint} btn--${size} `} onClick={onClick}>{children}</Button>;
};
Button.propTypes = {
  varaint: PropTypes.oneOf(['text', 'outlined', 'contained']),
  size: PropTypes.oneOf(['small', 'medium', 'big']),
};

Button.defaultProps = {
  varaint: 'text',
  size: 'medium',
};

export default Button;
