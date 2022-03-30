import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import MyPokemonVar, { MYPOKEMON_STORAGE } from '../../lib/myPokemonVar';
import Typography from '../Typography';
import { MyPokemonItem, Pokemon } from './Pokemon.types';

const SlideContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 70px;
  width: 100%;
`;
const Slide = styled.div`
  max-width: 400px;
  width: 80vw;
  margin: 0 auto;
  background: #fafafa;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const CatchButton: any = styled.button<any>`
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
  display: ${(props) => (props.isCatched ? 'none' : 'block')}; ;
`;

const CatchForm: any = styled.div<any>`
  padding: 20px;
  display: ${(props) => (props.isCatched ? 'block' : 'none')};
`;

const CatchInput = styled.input`
  padding: 5px 10px;
  border: none;
  margin-top: 15px;
`;
const CatchSave = styled.button`
  padding: 5px 10px;
  background: #10b981;
  border: none;
`;
type Props = {
  pokemon: Pokemon;
  handleClick: any;
};

const PokemonCatch: React.FC<Props> = ({ pokemon, handleClick }) => {
  //   useEffect(() => console.log(pokemon), []);
  const [pokemonName, setPokemonName] = useState<string>('');
  const [isCatched, setIsCatched] = useState<boolean>(false);
  const [isExist, setIsExist] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: pokemon?.id,
      name: pokemon?.name,
      pokemonName: pokemonName,
    };
  };

  const handleCatch = () => {
    var number = Math.random();
    if (number < 0.5) {
      setIsCatched(!isCatched);
      setIsFailed(false);
    } else {
      setIsCatched(false);
      setIsFailed(true);
    }
  };

  const handleSimpan = () => {
    const data: MyPokemonItem = {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites?.front_default,
      pokemonName: pokemonName,
    };
    const checkUniqueName = MyPokemonVar().some(
      (data: any) => data.pokemonName === pokemonName
    );

    if (!checkUniqueName && pokemonName) {
      MyPokemonVar([...MyPokemonVar(), data]);
      localStorage.setItem(MYPOKEMON_STORAGE, JSON.stringify(MyPokemonVar()));

      setIsCatched(false);
      setPokemonName('');
      setIsExist(false);
    } else {
      setIsExist(true);
      setPokemonName('');
    }
  };

  return (
    <SlideContainer>
      <Slide>
        <CatchButton isCatched={isCatched} onClick={handleCatch}>
          {isFailed && <>Failed! , </>}Try to catch <br />
          success probability is 50%
        </CatchButton>

        <CatchForm isCatched={isCatched}>
          <Typography variant="h2">kudos! You got {pokemon.name}</Typography>
          <Typography variant="h3">Fill in the name :</Typography>
          <CatchInput
            type="text"
            name="pokemonName"
            value={pokemonName}
            placeholder="name"
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <CatchSave onClick={handleSimpan}>save</CatchSave>
          {isExist && (
            <Typography variant="h3" color="#ec407a">
              Name already exist, try again!
            </Typography>
          )}
        </CatchForm>
      </Slide>
    </SlideContainer>
  );
};

export default PokemonCatch;
