import { makeVar } from '@apollo/client';

interface AppConfig {
  id: string;
  name: string;
}

let storage;
// if (typeof window !== 'undefined')
// storage = JSON.parse(window.localStorage.getItem('mantap'));

storage = [];

const appConfigVar = makeVar<any>(storage || []);

export default appConfigVar;
