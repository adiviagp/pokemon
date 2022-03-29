import { makeVar } from '@apollo/client';

export const MYPOKEMON_STORAGE = 'mypokemon';
interface MyPokemon {
  id: string;
  name: string;
}

let storage;
if (typeof window !== 'undefined')
  storage = JSON.parse(window.localStorage.getItem(MYPOKEMON_STORAGE));

const MyPokemonVar = makeVar<any>(storage || []);

export default MyPokemonVar;
