import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Input = ({ placeholder, size, type }) => {
  const theme = useTheme();

  const Input = styled.input`
  height: 40px;
  margin: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  border: 0.5px solid ${theme.colors.primary};
  border-radius: 5px;
  width: 445px;
  transition: 0.3s;
  background: ${theme.colors.secondary};
  &:focus {
    outline: none;
    border: 2px solid ${theme.colors.primary} ;
  }
  &:hover {
    background-image: linear-gradient(${theme.colors.background} 0 0);
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
    &.input--big{
      width: 347px;
    }
  @media (max-width: 350px){
    &.input--big{
      width: 307px;
    }
  }
  `;
  return (
    <Input className={`input--${size}`} placeholder={placeholder} type={type} />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel']),
  size: PropTypes.oneOf(['small', 'medium', 'big']),
};

Input.defaultProps = {
  placeholder: 'placeholder',
  type: 'text',
  size: 'medium',
};

export default Input;
