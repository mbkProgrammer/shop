/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Space, Typography } from '../../components';
import { GET_PRODUCTS_ACTION } from '../../actions';

const OrderCard = ({ data, route, products }) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  let totalPriceTpm = 0;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(totalPriceTpm);
  }, [totalPriceTpm]);

  return (
    <div className="OrderCard" onClick={() => router.push(route)}>
      <div className="OrderCard__header">
        <Typography variant="h5" css="color: inherit;">{data.address.name}</Typography>
        <Typography variant="h6" css="color: inherit;">{` ${totalPrice && totalPrice}  $`}</Typography>
      </div>
      <Typography variant="body1" css="color: inherit;">
        {`${data.address.province}, ${data.address.city}, ${data.address.address}, ${data.address.postalCode}`}
      </Typography>
      <div className="OrderCard--click">
        <BsFillArrowRightSquareFill />
      </div>
      <Space />
      <div className="Order__product__container">
        {data.order.map((item) => {
          const newCartsItem = products && products.find((product) => product.id === item.id);
          totalPriceTpm += (+newCartsItem.price * +item.quantity);
          return (
            <div className="Order__product">
              <Image src={`/${newCartsItem && newCartsItem.img}`} width="70px" height="40px" />
              <div className="Order__product__quantity">{item.quantity}</div>
            </div>
          );
        }) }
      </div>
      <div className="OrderCard__date">{format((+data.date * 1000), 'yyyy-MM-dd')}</div>

      <style>
        {`
        .OrderCard {
          background-color: ${theme.colors.background};
          min-height: 10rem;
          max-height: 15rem;
          margin: 10px;
          padding: 10px;
          border: 1px solid ${theme.colors.primary};
          border-radius: 10px;
          color: ${theme.colors.text};
          display: flex;
          flex-direction: column;
          width: calc(95vw - 300px);
          overflow: hidden;
          position: relative;
          transition: 0.4s;
        }

        .OrderCard__header {
          display: flex;
          justify-content: space-between;
        }

        .OrderCard:hover{
          background-color: ${theme.colors.primary};
          color: ${theme.colors.background};
        }

        .OrderCard:hover .OrderCard--click{
          opacity: 1;
        }

        .OrderCard--click {
          font-size: 2rem;
          position: absolute;
          right: 0;
          margin-right: 20px;
          height: calc(100% - 20px);
          display: flex;
          align-items: center;
          color: ${theme.colors.background};
          opacity: 0;
          transition: 0.8s;
        }
        .OrderCard__date {
          position: absolute;
          right: 0;
          bottom: 0;
          margin-right: 20px;
          margin-bottom: 5px;
          font-weight: 400;
          font-size: 0.8rem;
        }

        .Order__product__container {
          display: flex;
          align-items: center;
        }

        .Order__product {
          width: 70px;
          height: 70px;
          margin: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid ${theme.colors.primary};
        }

        .Order__product__quantity {
          border-radius: 50%;
          padding: 2px 5px;
          margin: 4px;
          border: 1px solid ${theme.colors.primary};
          color: inherit;
        }

        .OrderCard:hover .Order__product {
          border: 1px solid ${theme.colors.secondary};
        }
        .OrderCard:hover .Order__product__quantity {
          border: 1px solid ${theme.colors.secondary};
        }

        @media (max-width: 560px) {
          .OrderCard {
            width: 85vw;
          }
        }
      `}
      </style>
    </div>
  );
};

export default OrderCard;
