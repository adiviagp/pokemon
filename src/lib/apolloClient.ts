import { ApolloClient, HttpLink, InMemoryCache, makeVar } from '@apollo/client';
import MyPokemonVar from './myPokemonVar';

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
            pokemons: {
              keyArgs: false,
              merge(existing, incoming) {
                if (!incoming) return existing;
                if (!existing) return incoming; // existing will be empty the first time

                const { results, ...rest } = incoming;

                let res = rest;
                res.results = [...existing.results, ...results]; // Merge existing items with the items from incoming

                return res;
              },
            },
            cartItems: {
              read() {
                return MyPokemonVar();
              },
            },
          },
        },
      },
    }),
  });
}
