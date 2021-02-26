import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { BookList } from './components';

const errorLink = onError(({ graphQLErrors }) =>
  graphQLErrors?.forEach(({ message }) => {
    alert(`GraphQL error ${message}`);
  })
);

const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:4000/graphql'}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export const App: React.FC = () => {
  return <ApolloProvider client={client}>
    <BookList />
  </ApolloProvider>;
}
