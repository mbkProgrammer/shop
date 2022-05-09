import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import {
  AddPost, AdminLayout, Layout, Post,
} from '../../../containers';
import { Button } from '../../../components';

const POSTS_QUERY = gql`
  query GetPost {
      posts(sort: "date", dir: "desc") {
        id
        date
        title
        body
      }
  }
`;

const Admin = () => {
  const [showPost, setShowPost] = useState(false);
  const theme = useTheme();
  const auth = useSelector((state) => state.auth);
  const { loading, error, data } = useQuery(POSTS_QUERY);

  useEffect(() => {
  }, [auth, auth.response]);

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
        <AddPost show={showPost} setShow={setShowPost} />
        <div className="Blog__posts">
          <Button varaint="contained" onClick={() => setShowPost(true)}>Add Post</Button>
          {data && data.posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              date={1652067678821}
            />
          ))}
        </div>
      </AdminLayout>
    </Layout>
  );
};

export default Admin;
