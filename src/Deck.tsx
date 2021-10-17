import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PokemonQuery, PokemonQueryVariables } from './generated/PokemonQuery';

const POKEMON_QUERY = gql`
    query PokemonQuery($limit: Int = 10, $offset: Int = 10) {
        pokemon_v2_pokemon(limit: $limit, offset: $offset) {
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

function Deck() {
    const [offset, setOffset] = useState(0);
    const [getData, { data, loading }] = useLazyQuery<
        PokemonQuery,
        PokemonQueryVariables
    >(POKEMON_QUERY, {
        variables: { limit: 20, offset: offset },
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (loading) return <div>loading...</div>;

    return (
        <div>
            <Button
                variant="contained"
                onClick={() => {
                    getData();
                    setOffset((o) => o + 20);
                }}
            >
                Fetch
            </Button>
            {data && !loading ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : null}
        </div>
    );
}

export default Deck;
