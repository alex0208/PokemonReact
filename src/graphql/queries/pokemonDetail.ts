import { gql } from '@apollo/client';

export const POKEMON_DETAIL_QUERY = gql`
    query PokemonDetails($id: Int = 1) {
        pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
            id
            name
            height
            weight
            pokemon_v2_pokemonabilities {
                pokemon_v2_ability {
                    name
                }
            }
            base_experience
            pokemon_v2_pokemonmoves {
                level
                pokemon_v2_move {
                    name
                    id
                }
            }
            pokemon_v2_pokemonstats {
                base_stat
                effort
                pokemon_v2_stat {
                    name
                }
                id
            }
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }
        }
    }
`;
