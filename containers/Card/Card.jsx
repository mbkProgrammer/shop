import styled, { Styled } from '@emotion/styled';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

const Card = ({
  imageSrc = './assets/img/not-found.png',
  imageAlt = 'image',
  path = '/',
  title,
  price = '0.0',
}) => {
  const theme = useTheme();
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
    background: ${theme.colors.secondary};
    &:hover {
      transform: translateY(-5px) translateX(-2px);
      box-shadow: 6px 15px 3px #999;
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
        box-shadow: 1px 5px 3px #999;
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
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    @media (max-width: 570px) {
      height: 100%;
    }
  `;

  const CardTittle = styled.h4`
    font-weight: 500;
    line-height: 22px;
    font-size: 16px;
    margin: 0;
    margin-left: 5px;
    height: 100%;
    max-height: 60px;
    overflow: hidden;
    color: rgba(29, 41, 63, 1);
    @media (max-width: 300px){
      font-size: 14px;
    }
  `;
  const CardPrice = styled.h4`
    align-self: end;
    width: fit-content;
    max-height: 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    display: block;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    margin-right: 10px;
    color: ${theme.colors.primary};
    &::after{
      content: '  $';
      color: ${theme.colors.primary};
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

Card.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};

Card.defaultProps = {
  imageSrc: './assets/img/not-found.png',
  imageAlt: 'image',
  path: '/',
  title: 'this is title',
  price: '0.0',
};

export default Card;
