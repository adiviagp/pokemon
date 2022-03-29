import { ApolloClient, HttpLink, InMemoryCache, makeVar } from '@apollo/client';
import appConfigVar from './appConfigVar';

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://graphql-pokeapi.graphcdn.app/',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            cartItems: {
              read() {
                return appConfigVar();
              },
            },
          },
        },
      },
    }),
  });
}
