import styled, { Styled } from '@emotion/styled';
import { useRouter } from 'next/router';

const Card = ({
  imageSrc = './assets/img/not-found.png',
  imageAlt = 'image',
  path = '/',
  price = '0.0',
}) => {
  const router = useRouter();
  const Card = styled.div`
    margin: 10px;
    width: 250px;
    height: 230px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 5px 10px 3px #999;
    border: 2px solid var(--primary);
    overflow: hidden;
    @media (max-width: 480px) {
      box-shadow: 0px 2px 3px #999;
      margin: auto;
      flex-direction: row;
      width: 95vw;
      height: 30vw;
      margin-bottom: 3px;
    }
  `;
  const CardImg = styled.img`
    height: 160px;
    border: none;
    border-radius: 5px;
    @media (max-width: 480px) {
      height: 100%;
      width: 45%;
    }
  `;

  const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
  `;

  const CardTittle = styled.h4`
    font-weight: 500;
    line-height: 30px;
    font-size: 16px;
    margin-left: 5px;
    color: rgba(29, 41, 63, 1);
  `;
  const CardPrice = styled.h4`
    align-self: end;
    padding: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    text-align: right;
    color: var(--primary);
    &::after{
      content: '  $';
      color: var(--primary);
  }
  `;

  return (
    <Card onClick={() => router.push(path)}>
      <CardImg src={imageSrc} alt={imageAlt} />
      <CardContent>
        <CardTittle>
          lorem10Sit eu nulla incididunt velit ea anim fugiat .
        </CardTittle>
        <CardPrice>{price}</CardPrice>
      </CardContent>
    </Card>
  );
};

export default Card;
