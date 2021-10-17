import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react';

const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: 'https://beta.pokeapi.co/graphql/v1beta',
        }),
        cache: new InMemoryCache(),
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'cache-and-network',
            },
        },
    });
};

export const useApollo = () => {
    const client = useMemo(() => createApolloClient(), []);
    return client;
};
