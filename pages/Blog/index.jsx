import { useTheme } from '@emotion/react';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { Layout, Post } from '../../containers';
import { Space, Typography } from '../../components';

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

const Blog = () => {
  const theme = useTheme();

  const { loading, error, data } = useQuery(POSTS_QUERY);

  const posts = data && data.posts;

  return (
    <Layout>
      <Head>
        <title>MBK: Blog</title>
      </Head>
      <div className="Blog">
        <Typography variant="h2" align="center">
          Blog
        </Typography>
        <Space />
        <div className="Blog__posts">
          {data && posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              date={post.date}
            />
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .Blog {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 100%;
            max-width: 80vw;
            margin: auto;
          }

          .Blog__posts {
            width: 100%;
            max-width: 80vw;
          }

          @media (max-width: 480px){
            .Blog{
              max-width: 100vw;
            }
            .Blog__posts {
              width: 100%;
              max-width: 100vw;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Blog;
