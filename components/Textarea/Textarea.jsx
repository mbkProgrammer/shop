import styled from '@emotion/styled';

const Textarea = ({ placeholder = 'textarea', size = 'medium' }) => {
  const Textarea = styled.textarea`
  height: 80px;
  margin: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  border: 0.5px solid rgba(86, 178, 128, 0.8) ;
  border-radius: 5px;
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

export default Textarea;
