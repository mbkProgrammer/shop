import { useTheme } from '@emotion/react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { Layout } from '../../containers';
import { Button, Space, Typography } from '../../components';

const SINGLE_POST_QUERY = gql`
  query getPost($id: ID!){
   post(id: $id) {
      id
      title
      date
      body
  }
}
`;

const DELETE_POST = gql`
mutation DeletePosts($id: ID!){
  deletePost(id: $id)
}
`;

const BlogPost = ({ planId }) => {
  const [deletePost] = useMutation(DELETE_POST);
  const id = +planId.slug;
  const {
    loading, error, data,
  } = useQuery(
    SINGLE_POST_QUERY,
    {
      variables: {
        id,
      },
    },
  );

  const handleDelete = () => {
    deletePost({
      variables: {
        id,
      },
    });
  };
  const theme = useTheme();
  return (
    <Layout>
      <Space />

      <div className="blogPost">
        {data && !loading ? (
          <>
            <Typography variant="h3" align="center">{ data && data.post.title}</Typography>
            <Space />
            <Typography variant="body1">
              {data.post.body}
            </Typography>
            <Space />
            <Typography variant="body1">
              {data && format(+data.post.date, 'yyyy-MM-dd')}
            </Typography>
            <Space />
          </>
        ) : <Typography variant="h3">loading</Typography>}
      </div>

      <style jsx>
        {`
          .blogPost {
            max-width: 85vw;
            margin: auto;
          }
      `}
      </style>
    </Layout>
  );
};

BlogPost.getInitialProps = async ({ query }) => {
  const planId = query;
  return {
    planId,
  };
};

export default BlogPost;
