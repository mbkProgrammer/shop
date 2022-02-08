import styled from '@emotion/styled';

const Button = ({
  varaint = 'text', children, onClick, size = 'medium',
}) => {
  const Button = styled.button`
  border-radius: 5px;
  color: var(--primary);
  font-size: 19px;
  font-weight: 400;
  border: none;
  border-radius: 5px;
  margin: 5px;
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
    padding: 8px 56px;
    width: 100%;
  }

  &.btn--small {
    padding: 8px 0;
    width: 140px;
  }

  &.btn--medium {
    padding: 8px 44px;
  }

  `;

  return <Button className={`btn--${varaint} btn--${size} `} onClick={onClick}>{children}</Button>;
};

export default Button;
