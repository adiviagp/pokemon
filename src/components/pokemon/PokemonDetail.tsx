import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Container from '../Container';
import Typography from '../Typography';
import Image from 'next/image';

import { Pokemon } from './Pokemon.types';

const HeaderDetail = styled.div`
  background-color: #222;
  min-height: 25vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: -20px;
`;
const DetailNav = styled.div`
  margin-bottom: 1em;
`;
const DetailTitle = styled.div``;
const DetailImage = styled.div`
  position: absolute;
  bottom: -50px;
  right: 0;
  z-index: 999;
`;

const InfoDetail = styled.div`
  background-color: #fff;
  margin-top: -20px;
  border-radius: 20px 20px 0px 0px;
  position: relative;
  padding: 50px 20px 200px;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 7px;
  margin-bottom: 20px;
`;

const LabelDetail = styled.span`
  padding: 5px 15px;
  font-size: 0.75em;
  background: gray;
  border-radius: 0.5em;
  color: #fff;
  margin-top: 10px;
`;

type Props = {
  pokemon: Pokemon;
};

const PokemonDetail: React.FC<Props> = ({ pokemon }) => {
  return (
    <Container noPadding>
      <HeaderDetail>
        <DetailNav>
          <Link href="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="25"
                height="25"
              >
                <path
                  fillRule="evenodd"
                  fill="#FFFFFF"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </DetailNav>
        <DetailTitle>
          <Typography variant="h1" color="#ffffff">
            {pokemon.name}
          </Typography>
        </DetailTitle>
        <DetailImage>
          <Image
            src={pokemon.sprites.front_default}
            width={200}
            height={200}
            alt="poke"
          />
        </DetailImage>
      </HeaderDetail>
      <InfoDetail>
        <Typography variant="h2">Types</Typography>
        <LabelWrapper>
          {pokemon &&
            pokemon.types.map((type, index) => (
              <LabelDetail key={index}>{type.type.name}</LabelDetail>
            ))}
        </LabelWrapper>

        <Typography variant="h2">Moves</Typography>
        <LabelWrapper>
          {pokemon &&
            pokemon.moves.map((move, index) => (
              <LabelDetail key={index}>{move.move.name}</LabelDetail>
            ))}
        </LabelWrapper>
      </InfoDetail>
    </Container>
  );
};

export default PokemonDetail;
