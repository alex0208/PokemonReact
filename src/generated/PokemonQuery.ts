/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonQuery
// ====================================================

export interface PokemonQuery_pokemon_v2_pokemon_pokemon_v2_pokemonabilities_pokemon_v2_ability {
  __typename: "pokemon_v2_ability";
  name: string;
}

export interface PokemonQuery_pokemon_v2_pokemon_pokemon_v2_pokemonabilities {
  __typename: "pokemon_v2_pokemonability";
  /**
   * An object relationship
   */
  pokemon_v2_ability: PokemonQuery_pokemon_v2_pokemon_pokemon_v2_pokemonabilities_pokemon_v2_ability | null;
}

export interface PokemonQuery_pokemon_v2_pokemon {
  __typename: "pokemon_v2_pokemon";
  id: number;
  name: string;
  height: number | null;
  weight: number | null;
  /**
   * An array relationship
   */
  pokemon_v2_pokemonabilities: PokemonQuery_pokemon_v2_pokemon_pokemon_v2_pokemonabilities[];
}

export interface PokemonQuery {
  /**
   * fetch data from the table: "pokemon_v2_pokemon"
   */
  pokemon_v2_pokemon: PokemonQuery_pokemon_v2_pokemon[];
}

export interface PokemonQueryVariables {
  limit?: number | null;
  offset?: number | null;
}
