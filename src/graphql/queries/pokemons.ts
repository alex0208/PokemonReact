import { gql } from '@apollo/client';

export const POKEMON_QUERY = gql`
    query GetPokemonCollection(
        $limit: Int = 20
        $offset: Int = 0
        $_ilike: String = "%"
        $order_by: [pokemon_v2_pokemon_order_by!] = { name: asc }
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
            order_by: $order_by
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
