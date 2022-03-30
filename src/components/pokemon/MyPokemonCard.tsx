import styled from '@emotion/styled';
import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';
import { MyPokemonItem, PokemonItem } from './Pokemon.types';
import PokeBlank from '../../../public/loaderbg.png';
import MyPokemonVar, { MYPOKEMON_STORAGE } from '../../lib/myPokemonVar';

const Release = styled.button`
  background-color: #ec407a;
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
  width: 100px;
  margin-top: 2em;
`;
const Card = styled.div`
  flex: 1 50%;
  background: #fafafa;
  border-radius: 0.75em;
  padding: 1em;
  height: 150px;
  position: relative;
  margin-bottom: 2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
      <Typography variant="h2">{pokemon?.pokemonName}</Typography>
      <Typography variant="h3" color="#bdbdbd">
        {pokemon?.name}
      </Typography>
      <Release onClick={() => handleDelete(pokemon.pokemonName)}>
        RELEASE
      </Release>
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
