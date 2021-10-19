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
    Box,
    CircularProgress,
    Skeleton,
} from '@mui/material';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import PokemonCard from '../components/PokemonCard';
import { useLazyQuery } from '@apollo/client';
import { PokemonQuery, PokemonQueryVariables } from '../graphql/generated/PokemonQuery';
import { POKEMON_QUERY } from '../graphql/queries/pokemons';
import Header from '../components/Header';
import { SORTING_DIRECTION } from '../common/constants/sort';
import { order_by } from '../graphql/generated/globalTypes';
import useLocalStorage from '../common/hooks/useLocalStorage';
import { styled } from '@mui/system';
import CustomPagination from '../components/CustomPagination';

const PokemonCatalog: FC<RouteComponentProps> = () => {
    const [pageSize, setPageSize] = useLocalStorage('pageSize', 20);
    const [currentPage, setCurrrentPage] = useState(1);
    const searchTerm = useLocalStorage('searchTerm', '');
    const orderBy = useLocalStorage('orderBy', SORTING_DIRECTION.NAME);
    const sortingDirection = useLocalStorage('sortingDirections', order_by.asc);

    const [getData, { data, loading }] = useLazyQuery<PokemonQuery, PokemonQueryVariables>(POKEMON_QUERY, {
        variables: {
            limit: pageSize,
            offset: pageSize * (currentPage - 1),
            _ilike: `${searchTerm[0]}%`,
            // order_by: JSON.parse('{"height": "asc"}'),
            order_by: JSON.parse(`{"${orderBy[0]}": "${sortingDirection[0]}"}`),
        },
    });

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        setCurrrentPage(value);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        getData();
        console.log(data);
    }, []);

    useEffect(() => {
        setCurrrentPage(1);
    }, [searchTerm[0]]);

    useEffect(() => {
        console.log(sortingDirection[0]);
    }, [sortingDirection[0]]);

    return (
        <>
            <Header
                searchTerm={searchTerm}
                // sortingDirection={sortingDirection}
                orderBy={orderBy}
                sortingDirection={sortingDirection}
                pageSize={pageSize}
                setPageSize={setPageSize}
            />
            <CustomPagination currentPage={currentPage} setCurrentPage={setCurrrentPage} />

            {loading ? (
                <Spinner>
                    <CircularProgress />
                </Spinner>
            ) : null}

            {
                <Grid container alignItems="center" justifyContent="flex-start" spacing={3} px={3}>
                    {data
                        ? Array.from(data?.pokemon_v2_pokemon).map((pokemon, index) => (
                              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                                  <PokemonCard {...pokemon} />
                              </Grid>
                          ))
                        : [...Array(pageSize)].map((n, index) => (
                              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                                  <Skeleton variant="rectangular" height={250} />
                                  <Skeleton variant="text" height={100} />
                                  <Skeleton width="60%" height={25} />
                                  <Skeleton width="60%" />
                                  <Skeleton width="60%" />
                              </Grid>
                          ))}
                </Grid>
            }

            <CustomPagination currentPage={currentPage} setCurrentPage={setCurrrentPage} />
        </>
    );
};

const Spinner = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export default PokemonCatalog;
