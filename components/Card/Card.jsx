import styled, { Styled } from '@emotion/styled';
import { useRouter } from 'next/router';

const Card = ({
  imageSrc = './assets/img/not-found.png',
  imageAlt = 'image',
  path = '/',
  title = 'this is title himmdcs csdcscd ',
  price = '0.0',
}) => {
  const router = useRouter();
  const Card = styled.div`
  position: relative;
    margin: 15px;
    width: 250px;
    height: 230px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 5px 10px 3px #999;
    border: 2px solid var(--primary);
    overflow: hidden;
    transition: 0.4s;
    &:hover {
      transform: translateY(-10px) scale(1.01);
    }
    @media (max-width: 570px) {
      box-shadow: 0px 2px 3px #999;
      margin: auto;
      flex-direction: row;
      width: 95vw;
      height: 25vw;
      margin-bottom: 5px;
      &:hover {
        transform: scale(1.01);
      }
    }
  `;
  const CardImg = styled.img`
    height: 150px;
    width: 250px;
    border: none;
    border-radius: 5px;
    overflow: hidden;
    @media (max-width: 570px) {
      height: 100%;
      width: 65vw;
    }
  `;

  const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  `;

  const CardTittle = styled.h4`
    font-weight: 500;
    line-height: 22px;
    font-size: 16px;
    margin-left: 5px;
    height: 100%;
    overflow: hidden;
    color: rgba(29, 41, 63, 1);
    @media (max-width: 300px){
      font-size: 14px;
    }
  `;
  const CardPrice = styled.h4`
    align-self: end;
    height: 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    padding-top: 10px;
    padding-right: 5px;
    display: block;
    position: absolute;
    bottom: 2px;
    right: 2px;
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
          {title}
        </CardTittle>
        <CardPrice>{price}</CardPrice>
      </CardContent>
    </Card>
  );
};

export default Card;
