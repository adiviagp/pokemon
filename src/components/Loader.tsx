import styled from '@emotion/styled';
import React from 'react';
import Load from '../../public/loaderbg.png';
import Image from 'next/image';
import { css } from '@emotion/react';
type LoaderType = {
  image: StaticImageData;
};
const PokeLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Spinner = styled.span`
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <PokeLoader>
      <Spinner>
        <Image src={Load} width={80} height={80} alt="loader" />
      </Spinner>
    </PokeLoader>
  );
};

export default Loader;
