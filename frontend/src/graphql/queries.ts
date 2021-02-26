import { gql } from '@apollo/client';

export const GET_ALL_BOOKS = gql`
  query {
    books {
      id
      title
      description
      pages
    }
  }
`;
