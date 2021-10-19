/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { pokemon_v2_pokemon_order_by } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPokemonCollection
// ====================================================

export interface GetPokemonCollection_pokemon_v2_pokemon_pokemon_v2_pokemonabilities_pokemon_v2_ability {
  __typename: "pokemon_v2_ability";
  name: string;
}

export interface GetPokemonCollection_pokemon_v2_pokemon_pokemon_v2_pokemonabilities {
  __typename: "pokemon_v2_pokemonability";
  /**
   * An object relationship
   */
  pokemon_v2_ability: GetPokemonCollection_pokemon_v2_pokemon_pokemon_v2_pokemonabilities_pokemon_v2_ability | null;
}

export interface GetPokemonCollection_pokemon_v2_pokemon {
  __typename: "pokemon_v2_pokemon";
  id: number;
  name: string;
  height: number | null;
  weight: number | null;
  /**
   * An array relationship
   */
  pokemon_v2_pokemonabilities: GetPokemonCollection_pokemon_v2_pokemon_pokemon_v2_pokemonabilities[];
}

export interface GetPokemonCollection {
  /**
   * fetch data from the table: "pokemon_v2_pokemon"
   */
  pokemon_v2_pokemon: GetPokemonCollection_pokemon_v2_pokemon[];
}

export interface GetPokemonCollectionVariables {
  limit?: number | null;
  offset?: number | null;
  _ilike?: string | null;
  order_by?: pokemon_v2_pokemon_order_by[] | null;
}
