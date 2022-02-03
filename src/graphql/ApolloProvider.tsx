import {
  ApolloClient,
  ApolloProvider as _ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  uri: 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphql',
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }: { children?: React.ReactNode }) => {
  return <_ApolloProvider client={client}>{children}</_ApolloProvider>;
};

export default ApolloProvider;
