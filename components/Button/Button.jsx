import styled from '@emotion/styled';

const Button = ({ varaint = 'text', children, big = false }) => {
  const Button = styled.button`
  padding: 8px 44px;
  border-radius: 5px;
  color: var(--primary);
  font-size: 19px;
  font-weight: 400;
  border: none;
  margin: 2px;
  width: 100%;
  transition: 0.3s;
  &.btn--text {
    color: black;
    background: none;
  }
  &.btn--outlined {
    border: 1px solid;
    background: var(--background);
  }
  &.btn--contained {
    background: var(--primary);
    border: 1px solid;
    color: var(--background);
  }
  &:hover{
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
  }
  &.btn--big {
    padding: 8px 96px;
  }
  @media (max-width: 380px){
    &.btn--big {
      padding: 8px 66px;
    }
  }

  `;

  return <Button className={`btn--${varaint} ${big ? 'btn--big' : ''}`}>{children}</Button>;
};

export default Button;
