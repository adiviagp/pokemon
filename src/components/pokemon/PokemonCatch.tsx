import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import appConfigVar from '../../lib/appConfigVar';
import { Pokemon } from './Pokemon.types';

const SlideContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 100px;
  width: 100%;
`;
const Slide = styled.div`
  width: 400px;
  margin: 0 auto;
  background: #fafafa;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 10px;
  border-radius: 2em;
`;

type Props = {
  pokemon: Pokemon;
  handleClick: any;
};

const PokemonCatch: React.FC<Props> = ({ pokemon, handleClick }) => {
  //   useEffect(() => console.log(pokemon), []);
  const [pokemonName, setPokemonname] = useState<string>('');

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: pokemon?.id,
      name: pokemon?.name,
      pokemonName: pokemonName,
    };
    console.log(data);
  };

  const handleSimpan = () => {
    const data = {
      id: 4,
      name: 'bulbasar',
    };
    appConfigVar([...appConfigVar(), JSON.stringify(data)]);
    console.table(appConfigVar());
    localStorage.setItem('mantap', JSON.stringify(appConfigVar()));
  };

  //   useEffect(() => {
  //     console.log(cartItemsVar());
  //   }, []);

  return (
    <SlideContainer>
      <Slide>
        <div>PokemonCatch </div>
        {/* <form onSubmit={handleClick}> */}
        <input
          type="text"
          name="pokemonName"
          onChange={(e) => setPokemonname(e.target.value)}
        />
        <button onClick={handleSimpan}>simpan</button>
        {/* </form> */}
      </Slide>
    </SlideContainer>
  );
};

export default PokemonCatch;