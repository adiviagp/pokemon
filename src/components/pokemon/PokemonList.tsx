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
  background-color: #0ea5e9;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 100px;
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
