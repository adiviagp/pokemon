import styled from '@emotion/styled';
import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';
import { PokemonItem } from './Pokemon.types';
import PokeBlank from '../../../public/loaderbg.png';

const Card = styled.div`
  flex: 1 50%;
  background: #87bcf9;
  border-radius: 0.75em;
  padding: 1em;
  height: 200px;
  position: relative;
`;
const PokeImage = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
`;

type Props = {
  pokemon: PokemonItem;
};

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <Card>
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

export default PokemonCard;
