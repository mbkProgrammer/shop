/* eslint-disable camelcase */
import { useContext, useState } from 'react';
import Head from 'next/head';
import { BsCart3 } from 'react-icons/bs';
import { Quantity, Button, Typography } from '../../components';
import PRODUCTS from '../api/Products.json';
import CartContext from '../../context/CartContext';
import { Layout } from '../../containers';

const Products = ({ plan_id }) => {
  const [itemNum, setItemNum] = useState(1);
  const { carts, dispatchCart } = useContext(CartContext);

  const added = carts.find((carts) => carts.id === plan_id.slug);
  const product = PRODUCTS.find((item) => item.id === plan_id.slug);

  const handleAddToCart = () => {
    if (added) {
      dispatchCart({
        type: 'REMOVE_FROM_CART',
        id: plan_id.slug,
      });
    } else {
      dispatchCart({
        type: 'ADD_TO_CART',
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
          {product.name}
        </title>
      </Head>
      <div className="singleProduct">
        <img src={`/${product.img}`} alt={product.name} className="singleProduct__img" />
        <div className="singleProduct__content">
          <Typography variant="h2">{product.name}</Typography>
          <Typography variant="body2" css="">{product.description}</Typography>
          <div className="singleProduct__buying">
            <div className="singleProduct__Quantity">
              <Quantity itemNum={itemNum} setItemNum={setItemNum} />
              <div className="singleProduct__price">{product.price * itemNum}</div>
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
            color: var(--primary);
          }
          .singleProduct__price::after{
            content: '  $';
            color: var(--primary);
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
