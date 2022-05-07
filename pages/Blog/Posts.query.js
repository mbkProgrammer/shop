import { gql } from '@apollo/client';

const POSTS_QUERY = gql`
  query GetDogs {
    posts {
      id
      title
      date
      body
    }
  }
`;

export default POSTS_QUERY;
