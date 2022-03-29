import styled from '@emotion/styled';
import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';
import { MyPokemonItem, PokemonItem } from './Pokemon.types';
import PokeBlank from '../../../public/loaderbg.png';
import MyPokemonVar, { MYPOKEMON_STORAGE } from '../../lib/myPokemonVar';

const Card = styled.div`
  flex: 1 50%;
  background: #87bcf9;
  border-radius: 0.75em;
  padding: 1em;
  height: 200px;
  position: relative;
  margin-bottom: 2em;
`;
const PokeImage = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
`;

type Props = {
  pokemon: MyPokemonItem;
};

const MyPokemonCard: React.FC<Props> = ({ pokemon }) => {
  const handleDelete = (pokemonName: any): any => {
    const currentData = MyPokemonVar();
    if (currentData) {
      const filterData = currentData.filter(
        (data: any) => data.pokemonName !== pokemonName
      );
      MyPokemonVar(filterData);
      localStorage.setItem(MYPOKEMON_STORAGE, JSON.stringify(filterData));
    }
  };

  return (
    <Card>
      <button onClick={() => handleDelete(pokemon.pokemonName)}>DELETE</button>
      <Typography variant="h2" color="#ffffff">
        {pokemon?.name}
      </Typography>
      <Typography variant="h3" color="#ffffff">
        {pokemon?.id}
      </Typography>
      <PokeImage>
        <Image
          src={pokemon.image ? pokemon.image : PokeBlank}
          width={140}
          height={140}
          alt="poke"
        />
      </PokeImage>
    </Card>
  );
};

export default MyPokemonCard;
