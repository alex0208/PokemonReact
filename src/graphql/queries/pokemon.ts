import { gql } from '@apollo/client';

export const POKEMON_QUERY = gql`
    query PokemonQuery(
        $limit: Int = 20
        $offset: Int = 0
        $_ilike: String = "%"
    ) {
        pokemon_v2_pokemon(
            limit: $limit
            offset: $offset
            where: {
                _or: [
                    { name: { _ilike: $_ilike } }
                    {
                        pokemon_v2_pokemonabilities: {
                            pokemon_v2_ability: { name: { _ilike: $_ilike } }
                        }
                    }
                ]
            }
        ) {
            id
            name
            height
            weight
            pokemon_v2_pokemonabilities {
                pokemon_v2_ability {
                    name
                }
            }
        }
    }
`;
