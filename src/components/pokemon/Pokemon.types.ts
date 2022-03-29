export interface PokemonItem {
  id: number;
  url: string;
  name: string;
  image: string;
  artwork: string;
  dreamworld: string;
}

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  nextOffset: number;
  prevOffset: number;
  params: string;
  results: PokemonItem[];
  status: boolean;
  message: string;
}

export interface BaseName {
  id: number;
  url: string;
  name: string;
}

export interface Ability {
  ability: BaseName;
  is_hidden: boolean;
  slot: number;
}

export interface GameIndex {
  game_index: number;
  version: BaseName;
}

export interface VersionDetail {
  rarity: number;
  version: BaseName;
}
export interface HeldItem {
  item: BaseName;
  version_details: VersionDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: BaseName;
  version_group: BaseName;
}
export interface Move {
  move: BaseName;
  version_group_details: VersionGroupDetail[];
}

export interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: BaseName;
}

export interface Type {
  slot: number;
  type: BaseName;
}
export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: BaseName[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: BaseName;
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  weight: number;
  status: boolean;
  message: string;
}
