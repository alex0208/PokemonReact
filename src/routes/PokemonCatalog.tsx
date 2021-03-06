import { Grid, Box, CircularProgress, Skeleton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
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

const PokemonCatalog = () => {
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
            order_by: JSON.parse(`{"${orderBy[0]}": "${sortingDirection[0]}"}`),
        },
    });

    useEffect(() => {
        getData();
    }, [getData]);

    useEffect(() => {
        setCurrrentPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm[0]]);

    return (
        <>
            <Header
                searchTerm={searchTerm}
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

            {data?.pokemon_v2_pokemon.length === 0 ? (
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
                    <Typography variant="body1" color="text.secondary" component="div">
                        No results found.
                    </Typography>
                </Box>
            ) : null}
            {
                <Grid container alignItems="center" justifyContent="flex-start" spacing={3} px={3}>
                    {data
                        ? Array.from(data?.pokemon_v2_pokemon).map((pokemon, index) => {
                              return (
                                  <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                                      <PokemonCard {...pokemon} />
                                  </Grid>
                              );
                          })
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
