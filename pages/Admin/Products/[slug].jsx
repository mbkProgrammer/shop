/* eslint-disable camelcase */
import Head from 'next/head';
import { jsx, useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Button, Typography } from '../../../components';
import { Layout } from '../../../containers';
import {
  DELETE_PRODUCTS_ACTION,
  GET_PRODUCTS_ACTION,
} from '../../../actions';

const Products = ({ products, plan_id }) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  const product = products && products.find((item) => item.id === plan_id.slug);
  const theme = useTheme();
  const router = useRouter();

  const handleDelete = async () => {
    await dispatch(DELETE_PRODUCTS_ACTION(plan_id.slug));
    router.push('..');
  };

  return (
    <Layout>
      <Head>
        <title>{product && product.name}</title>
      </Head>
      <div className="singleProduct">
        <img
          src={`/${product && product.img}`}
          alt={product && product.name}
          className="singleProduct__img"
        />
        <div className="singleProduct__content">
          <Typography variant="h2">{product && product.name}</Typography>
          <Typography variant="body2" css="">
            {product && product.description}
          </Typography>
          <div className="singleProduct__buying">
            <Button
              varaint="outlined"
              size="big"
              onClick={handleDelete}
              styles={`color: ${theme.colors.error}; &:hover{background: ${theme.colors.error};color: ${theme.colors.secondary};}`}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .singleProduct {
            display: flex;
          }

          .singleProduct__img {
            width: 50vw;
            height: 100%;
            padding: 0 20px;
          }

          .singleProduct__content {
            padding: 0 10px;
          }

          .singleProduct__buying {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 20px;
          }

          .singleProduct__Quantity {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 100%;
          }

          .singleProduct__price {
            font-size: 36px;
            color: ${theme.colors.primary};
          }
          .singleProduct__price::after {
            content: "  $";
            color: ${theme.colors.primary};
          }
          @media (max-width: 580px) {
            .singleProduct {
              flex-direction: column;
            }
            .singleProduct__img {
              width: 100vw;
            }
          }
          @media (max-width: 870px) {
            .singleProduct__buying {
              flex-direction: column;
            }
            .singleProduct__Quantity {
              flex-direction: row;
            }
          }
        `}
      </style>
    </Layout>
  );
};

Products.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(GET_PRODUCTS_ACTION());
  const { products } = reduxStore.getState();
  const plan_id = query;
  return {
    products: products.products,
    plan_id,
  };
};

export default Products;
