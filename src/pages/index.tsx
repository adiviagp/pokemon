import styled from '@emotion/styled';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import PokemonList from '../components/pokemon/PokemonList';
import PokemonContainer from '../components/pokemon/PokemonList';
import Typography from '../components/Typography';
import { initializeApollo, addApolloState } from '../lib/apollo';
import GET_POKEMONS from '../lib/queries/getPokemons';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Pokemon = () => {
  return (
    <div>
      <Container>
        <Header title="Pokédex" />
        <PokemonList />
      </Container>
    </div>
  );
};

export async function getServerSideProps(context: GetStaticPropsContext) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_POKEMONS,
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default Pokemon;
