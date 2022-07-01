import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import { Layout, OrderCard, AdminLayout } from '../../../containers';
import { Button } from '../../../components';
import { GET_ALL_ORDERS_ACTION, GET_PRODUCTS_ACTION } from '../../../actions';

const Orders = ({ products, orders }) => {
  const theme = useTheme();
  const auth = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.response || !auth.response.email) {
      router.push('../Account/Auth');
    } else if (auth.response.type === 'user') {
      router.push('../Account');
    }
  }, [auth, auth.response, router]);

  return (
    <Layout>
      <Head>
        <title>
          MBK:
          {' '}
          {auth.response && auth.response.username}
        </title>
      </Head>
      <AdminLayout>
        {orders ? orders.map((data) => (
          <OrderCard data={data} key={data.id} route={`./Admin/Orders/${data.id}`} products={products} />
        )) : ''}

      </AdminLayout>
    </Layout>
  );
};

Orders.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_PRODUCTS_ACTION());
  const { products, auth } = reduxStore.getState();
  if (auth && auth.response) {
    await reduxStore.dispatch(GET_ALL_ORDERS_ACTION(auth.response.id));
  }
  const { orders } = reduxStore.getState();
  return {
    products: products.products,
    orders: orders.response,
  };
};

export default Orders;
