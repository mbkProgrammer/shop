import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  AddProducts, AdminLayout, Card, Layout,
} from '../../containers';
import { GET_PRODUCTS_ACTION } from '../../actions';
import { Button } from '../../components';

const Admin = ({ products }) => {
  const theme = useTheme();
  const router = useRouter();
  const { auth } = useSelector((state) => state);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!auth.response || !auth.response.email) {
      router.replace('./Account/Auth');
    } else if (auth.response.type === 'user') {
      router.replace('./Account');
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
        <AddProducts setShow={setShow} show={show} />
        <Button varaint="contained" styles="margin: auto; display: block;" onClick={() => setShow(!show)}>Add Products</Button>
        <div className="products__container">
          {products
            && products.map((item) => (
              <Card
                key={item.id}
                title={item.name}
                imageAlt={item.name}
                imageSrc={item.img}
                path={`./Admin/Products/${item.id}`}
                price={item.price}
              />
            ))}
        </div>
      </AdminLayout>

      <style jsx>
        {`
       .products__container {
         width: 95%;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
       }
      `}
      </style>
    </Layout>
  );
};

Admin.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_PRODUCTS_ACTION());
  const { products } = reduxStore.getState();
  return {
    products: products.products,
  };
};

export default Admin;
