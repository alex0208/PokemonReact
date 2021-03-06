import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/apollo';
import { Route, Switch } from 'react-router';
import PokemonCatalog from '../routes/PokemonCatalog';
import PokemonDetailPage from '../routes/PokemonDetailPage';

function App() {
    const client = useApollo();

    return (
        <ApolloProvider client={client}>
            <Switch>
                <Route exact path="/:id(\d+)" component={PokemonDetailPage} />
                <Route path="/" component={PokemonCatalog} />
            </Switch>
        </ApolloProvider>
    );
}

export default App;
