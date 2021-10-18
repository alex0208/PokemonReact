import { gql, useLazyQuery } from '@apollo/client';
import { Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
    PokemonQuery,
    PokemonQueryVariables,
} from './graphql/generated/PokemonQuery';
import { POKEMON_QUERY } from './graphql/queries/pokemon';

const Deck = () => {
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
            <Card></Card>
        </div>
    );
};

export default Deck;
