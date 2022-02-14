import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Textarea = ({ placeholder, size }) => {
  const theme = useTheme();

  const Textarea = styled.textarea`
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
    border: 2px solid ${theme.colors.primary} ;
  }
  &:hover {
    background-image: linear-gradient(${theme.colors.background} 0 0);
  }
  &.input--big{
    width: 445px;
    max-width: 445px;
  }
  &.input--small{
    max-width: 140px;
  }
  &.input--medium{
    max-width: 216px;
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
    <Textarea className={`input--${size}`} placeholder={placeholder} />
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
