/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonDetails
// ====================================================

export interface PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonabilities_pokemon_v2_ability {
    __typename: 'pokemon_v2_ability';
    name: string;
}

export interface PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonabilities {
    __typename: 'pokemon_v2_pokemonability';
    /**
     * An object relationship
     */
    pokemon_v2_ability: PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonabilities_pokemon_v2_ability | null;
}

export interface PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonmoves_pokemon_v2_move {
    __typename: 'pokemon_v2_move';
    name: string;
    id: number;
}

export interface PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonmoves {
    __typename: 'pokemon_v2_pokemonmove';
    level: number;
    /**
     * An object relationship
     */
    pokemon_v2_move: PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonmoves_pokemon_v2_move | null;
}

export interface PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonstats_pokemon_v2_stat {
    __typename: 'pokemon_v2_stat';
    name: string;
}

export interface PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonstats {
    __typename: 'pokemon_v2_pokemonstat';
    base_stat: number;
    effort: number;
    /**
     * An object relationship
     */
    pokemon_v2_stat: PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonstats_pokemon_v2_stat | null;
    id: number;
}

export interface PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemontypes_pokemon_v2_type {
    __typename: 'pokemon_v2_type';
    name: string;
}

export interface PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemontypes {
    __typename: 'pokemon_v2_pokemontype';
    /**
     * An object relationship
     */
    pokemon_v2_type: PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemontypes_pokemon_v2_type | null;
}

export interface PokemonDetails_pokemon_v2_pokemon {
    __typename: 'pokemon_v2_pokemon';
    id: number;
    name: string;
    height: number | null;
    weight: number | null;
    /**
     * An array relationship
     */
    pokemon_v2_pokemonabilities: PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonabilities[];
    base_experience: number | null;
    /**
     * An array relationship
     */
    pokemon_v2_pokemonmoves: PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonmoves[];
    /**
     * An array relationship
     */
    pokemon_v2_pokemonstats: PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemonstats[];
    /**
     * An array relationship
     */
    pokemon_v2_pokemontypes: PokemonDetails_pokemon_v2_pokemon_pokemon_v2_pokemontypes[];
}

export interface PokemonDetails {
    /**
     * fetch data from the table: "pokemon_v2_pokemon"
     */
    pokemon_v2_pokemon: PokemonDetails_pokemon_v2_pokemon[];
}

export interface PokemonDetailsVariables {
    id?: number | null;
}
