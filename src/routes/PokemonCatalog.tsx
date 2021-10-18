import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Grid,
    Card,
    Button,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Pagination,
} from '@mui/material';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Deck from '../Deck';
import PokemonCard from '../components/PokemonCard';
import { useLazyQuery } from '@apollo/client';
import {
    PokemonQuery,
    PokemonQueryVariables,
} from '../graphql/generated/PokemonQuery';
import { POKEMON_QUERY } from '../graphql/queries/pokemon';

const PokemonCatalog: FC<RouteComponentProps> = () => {
    const [pageSize, setPageSize] = useState(20);
    const [currentPage, setCurrrentPage] = useState(1);
    const [getData, { data, loading }] = useLazyQuery<
        PokemonQuery,
        PokemonQueryVariables
    >(POKEMON_QUERY, {
        variables: { limit: pageSize, offset: pageSize * (currentPage - 1) },
    });

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        setCurrrentPage(value);
    };

    useEffect(() => {
        getData();
        console.log(data);
    }, []);

    return (
        <>
            <Grid
                container
                alignItems="center"
                justifyContent="flex-start"
                spacing={3}
                px={3}
                // spacing={{ xs: 2, md: 3 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {data &&
                    Array.from(data.pokemon_v2_pokemon).map(
                        (pokemon, index) => (
                            <Grid
                                item
                                // spacing={5}
                                xs={6}
                                sm={4}
                                md={3}
                                lg={2}
                                key={index}
                            >
                                <PokemonCard
                                    {...pokemon}
                                    // id={pokemon.id}
                                    // name={pokemon.name}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
            <Typography>Page: {currentPage}</Typography>
            <Pagination
                count={currentPage + 2}
                siblingCount={3}
                boundaryCount={2}
                page={currentPage}
                onChange={handlePageChange}
            />
        </>
    );
};

export default PokemonCatalog;
