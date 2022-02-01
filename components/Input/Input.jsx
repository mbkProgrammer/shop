import styled from '@emotion/styled';

const Input = ({ placeholder = 'input', size = 'medium' }) => {
  const Input = styled.input`
  height: 40px;
  margin: 2px;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  border: 0.5px solid rgba(86, 178, 128, 0.8) ;
  width: 445px;
  &:focus {
    outline: none;
    border: 1.5px solid rgba(96, 188, 138, 1) ;
  }
  &:hover {
    border: 1.5px solid rgba(96, 188, 138, 1) ;
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
    <Input className={`input--${size}`} placeholder={placeholder} />
  );
};

export default Input;
