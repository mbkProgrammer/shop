/* eslint-disable prefer-const */
import { useTheme } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { Layout } from '../../../containers';
import {
  Typography, Space, Button,
} from '../../../components';
import { GET_PRODUCTS_ACTION } from '../../../actions';
import CartCard from '../../../containers/CartCard/CartCard';

const Cart = ({ products }) => {
  const theme = useTheme();
  const router = useRouter();
  const { carts } = useSelector((state) => state.cart);
  let subTotal = 0;

  return (
    <Layout>
      <Head>
        <title>MBK: Cart</title>
      </Head>
      <Typography variant="h5" css="text-align: center;">Your cart items </Typography>
      <Space />
      <Button size="small" styles="display: block; margin: auto;" onClick={() => router.push('/')}>Back to shopping</Button>
      <Space />
      <table className="Cart__table">
        <thead>
          <tr>
            <th className="Cart__t--Products">Products</th>
            <th className="Cart__t--Price">Price</th>
            <th className="Cart__t--Quantity">Quantity</th>
            <th className="Cart__t--Total">Total</th>
          </tr>
        </thead>
        <tbody>
          { carts.map((item) => {
            const newCartsItem = products && products.find((product) => product.id === item.id);
            subTotal += (newCartsItem.price * item.quantity);
            return (
              <CartCard data={newCartsItem} quantity={item.quantity} key={item.id} />
            );
          })}
        </tbody>
      </table>
      <Space />

      <div className={css`
        text-align: center;
      `}
      >
        <Typography variant="h4">
          Sub Total:
          {'         '}
          {subTotal}
          {'  '}
          $
        </Typography>
        {
          carts.length !== 0 ? (<Button varaint="contained" onClick={() => router.push('/Account/Cart/Delivery')}>Check-out</Button>) : ('')
        }

      </div>

      <style jsx>
        {`
          .Cart__table {
            width: 95vw;
            text-align: left;
            margin: auto;
          }
          .Cart__table tr {
            border-bottom: 1px solid #101010;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .Cart__table tr th{
            padding: 10px 5px;
          }
          .Cart__t--Products {
            width: 50%;
          }

          @media (max-width: 480px){
            .Cart__t--Total, .Cart__t--Quantity{
              display: none;
            }
          }
      `}
      </style>
    </Layout>
  );
};

Cart.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_PRODUCTS_ACTION());
  const { products } = reduxStore.getState();
  return {
    products: products.products,
  };
};

export default Cart;
