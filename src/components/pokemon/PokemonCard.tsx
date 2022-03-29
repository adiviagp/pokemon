import styled from '@emotion/styled';
import React from 'react';
import Typography from '../Typography';
import Image from 'next/image';
import { PokemonItem } from './Pokemon.types';
import PokeBlank from '../../../public/loaderbg.png';
import Link from 'next/link';

const Card = styled.div`
  width: 47%;
  background: #fafafa;
  border-radius: 0.75em;
  padding: 1em;
  height: 150px;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const PokeImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const TotalOwned = styled.span`
  padding: 5px 8px;
  font-size: 0.5em;
  background: gray;
  border-radius: 1em;
  color: #fff;
`;

type Props = {
  pokemon: PokemonItem;
};

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <Card>
      <Link href={`/pokemon/${pokemon.name}`}>
        <a>
          <div>
            <Typography variant="h2">{pokemon?.name}</Typography>
            <TotalOwned>Owned: {pokemon?.id}</TotalOwned>
            <PokeImage>
              <Image
                src={pokemon.image ? pokemon.image : PokeBlank}
                width={100}
                height={100}
                alt="poke"
              />
            </PokeImage>
          </div>
        </a>
      </Link>
    </Card>
  );
};

export default PokemonCard;
