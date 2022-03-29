import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react';
import { initializeApollo, addApolloState } from '../../lib/apollo';
import GET_POKEMONS from '../../lib/queries/getPokemons';
import Loader from '../Loader';
import { PokemonItem } from './Pokemon.types';
import PokemonCard from './PokemonCard';

const PokemonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  gap: 10px;
`;

const LoadMore = styled.button`
  margin-bottom: 400px;
`;

const PokemonList = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;
  return (
    <section>
      <PokemonContainer>
        {data.pokemons.results.map((pokemon: PokemonItem, index: number) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </PokemonContainer>
      <LoadMore
        onClick={() =>
          fetchMore({
            variables: {
              limit: 5,
              offset: data.pokemons.nextOffset,
            },
          })
        }
      >
        LOAD MORE
      </LoadMore>
    </section>
  );
};

export default PokemonList;
