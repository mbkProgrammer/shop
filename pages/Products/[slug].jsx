/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { BsCart3 } from 'react-icons/bs';
import { jsx, useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { Quantity, Button, Typography } from '../../components';
import { Layout } from '../../containers';
import {
  ADD_TO_CART_ACTION, GET_PRODUCTS_ACTION, REMOVE_FROM_CART_ACTION, UPDATE_QUANTITY_CART,
} from '../../actions';
import GET_AUTH_ACTION from '../../actions/auth';

const Products = ({ products, plan_id }) => {
  const [updateitemNum, setUpdateItemNum] = useState(false);
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  const added = carts && carts.find((cart) => cart.id === plan_id.slug);
  const [itemNum, setItemNum] = useState(added ? added.quantity : 1);
  const product = products && products.find((item) => item.id === plan_id.slug);

  useEffect(() => {
    if (!updateitemNum) {
      if (added) {
        setItemNum(added.quantity);
      }
      setUpdateItemNum(true);
    }
  }, []);

  useEffect(() => {
    if (added) {
      UPDATE_QUANTITY_CART(dispatch, { id: plan_id, quantity: itemNum });
      setItemNum(added.quantity);
    }
  }, [JSON.stringify(itemNum)]);

  const theme = useTheme();
  const handleAddToCart = () => {
    if (added) {
      REMOVE_FROM_CART_ACTION(dispatch, { id: plan_id.slug });
    } else {
      ADD_TO_CART_ACTION(dispatch, { id: plan_id.slug, quantity: itemNum });
    }
  };

  return (
    <Layout>
      <Head>
        <title>
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
