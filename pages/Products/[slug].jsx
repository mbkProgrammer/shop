/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { BsCart3 } from 'react-icons/bs';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { Quantity, Button, Typography } from '../../components';
import { Layout } from '../../containers';
import { GET_PRODUCTS_ACTION } from '../../actions';
import actionTypes from '../../configs/actionTypes';

const Products = ({ plan_id }) => {
  const [itemNum, setItemNum] = useState(1);
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.products);
  const { carts } = useSelector((state) => state.cart);

  useEffect(async () => {
    await dispatch(GET_PRODUCTS_ACTION());
  }, []);

  const added = carts && carts.find((cart) => cart.id === plan_id.slug);
  const product = products && products.find((item) => item.id === plan_id.slug);

  const theme = useTheme();
  const handleAddToCart = () => {
    if (added) {
      dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        id: plan_id.slug,
      });
    } else {
      dispatch({
        type: actionTypes.ADD_TO_CART,
        id: plan_id.slug,
        quantity: itemNum,
      });
    }
  };

  return (
    <Layout>
      <Head>
        <title>
          product:
          {' '}
          {product && product.name}
        </title>
      </Head>
      <div className="singleProduct">
        <img src={`/${product && product.img}`} alt={product && product.name} className="singleProduct__img" />
        <div className="singleProduct__content">
          <Typography variant="h2">{product && product.name}</Typography>
          <Typography variant="body2" css="">{product && product.description}</Typography>
          <div className="singleProduct__buying">
            <div className="singleProduct__Quantity">
              <Quantity itemNum={itemNum} setItemNum={setItemNum} />
              <div className="singleProduct__price">{product && product.price * itemNum}</div>
            </div>
            {
                !added ? (
                  <Button varaint="contained" size="big" onClick={handleAddToCart}>
                    <BsCart3 />
                    Add to cart
                  </Button>
                )
                  : (
                    <Button varaint="contained" size="big" onClick={handleAddToCart}>
                      <BsCart3 />
                      Remove from cart
                    </Button>
                  )
              }
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .singleProduct{
            display: flex;
          }

          .singleProduct__img {
            width: 50vw;
            height: 100%;
            padding: 0 20px;
          }

          .singleProduct__content {
            padding:0 10px;
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
          .singleProduct__price::after{
            content: '  $';
            color: ${theme.colors.primary};
          }
          @media (max-width: 580px){
            .singleProduct {
              flex-direction: column;
            }
            .singleProduct__img {
              width: 100vw;
            }
          }
          @media (max-width: 870px){
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

export const getServerSideProps = async ({ params }) => {
  const plan_id = params;
  return {
    props: { plan_id },
  };
};

export default Products;
