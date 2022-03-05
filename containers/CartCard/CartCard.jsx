import styled, { Styled } from '@emotion/styled';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  Button, Quantity, Space, Typography,
} from '../../components';
import { REMOVE_FROM_CART_ACTION, UPDATE_QUANTITY_CART } from '../../actions';
import cart from '../../reducers/cart';

const CartCard = ({ data, quantity }) => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const [itemNum, setItemNum] = useState(quantity);

  useEffect(() => {
    UPDATE_QUANTITY_CART(dispatch, { id: data.id, quantity: itemNum });
  }, [JSON.stringify(itemNum)]);

  const CartCard = styled.div`
    position: relative;
    margin: 5px;
    width: 50vw;
    height: 130px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.4s;
    &:hover {
      transform: translateY(-5px) translateX(-2px);
    }
    @media (max-width: 480px){
      flex-direction: column;
      width: 100%;
      height: 250px;
    }
  `;
  const CartCardImg = styled.img`
    height: 100%;
    width:  25vw;
    border: none;
    border-radius: 5px;
    overflow: hidden;
    @media (max-width: 480px){
      width: 100%;
      height: 100px;
    }
  `;

  const CartCardContent = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    width: 30vw;
    height: 100%;
    padding: 10px;
    @media (max-width: 480px){
      width: 100%;
      height: 150px;
    }
  `;

  return (
    <tr key={data.id}>
      <td className="Cart__t--Products">
        <CartCard>
          <CartCardImg src={`../${data.img}`} alt={data.name} onClick={() => router.push(`/Products/${data.id}`)} />
          <CartCardContent>
            <Typography variant="h5" css="overflow: hidden;">
              {data.name}
            </Typography>
            <Space />
            <Button size="small" onClick={() => REMOVE_FROM_CART_ACTION(dispatch, { id: data.id })}>Remove</Button>
          </CartCardContent>
        </CartCard>
      </td>
      <td className="Cart__t--Price">
        <Typography variant="h6">
          {data.price}
          {' '}
          $
        </Typography>
      </td>
      <td className="Cart__t--Quantity">
        <Quantity itemNum={itemNum} setItemNum={setItemNum} />
      </td>
      <td className="Cart__t--Total">
        <Typography variant="h6">
          {data.price * itemNum}
          {' '}
          $
        </Typography>
      </td>
      <td className="Cart__t--Price-Quantity">
        <Typography variant="h6">
          {data.price * itemNum}
          {' '}
          $
        </Typography>
        <Quantity itemNum={itemNum} setItemNum={setItemNum} />
      </td>

      <style jsx>
        {`
        tr{
          border-bottom: 1px solid #101010;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .Cart__t--Price-Quantity {
          display: none;
        }

        @media (max-width: 480px){
          .Cart__t--Total, .Cart__t--Quantity, .Cart__t--Price{
            display: none;
          }
          .Cart__t--Price-Quantity {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 250px;
            padding: 10px;
          }
        }
      `}
      </style>
    </tr>
  );
};

export default CartCard;
