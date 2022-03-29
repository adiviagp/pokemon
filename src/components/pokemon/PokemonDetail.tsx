import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Container from '../Container';
import Typography from '../Typography';
import Image from 'next/image';

import { Pokemon } from './Pokemon.types';

const HeaderDetail = styled.div`
  background-color: #72cdb1;
  min-height: 35vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const DetailNav = styled.div`
  margin-bottom: 1em;
`;
const DetailTitle = styled.div``;
const DetailImage = styled.div`
  position: absolute;
  bottom: -80px;
  right: 0;
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
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
            width={270}
            height={270}
            alt="poke"
          />
        </DetailImage>
      </HeaderDetail>
    </Container>
  );
};

export default PokemonDetail;
