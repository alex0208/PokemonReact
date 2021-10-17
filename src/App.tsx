import { ApolloProvider } from '@apollo/client';
import { useApollo } from './apollo';
import Deck from './Deck';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
    // MenuIcon,
} from '@mui/material';
import { Route, Switch } from 'react-router';
import PokemonCatalog from './routes/PokemonCatalog';
import PokemonDetailPage from './routes/PokemonDetailPage';

function App() {
    const client = useApollo();

    return (
        <ApolloProvider client={client}>
            <Switch>
                <Route exact path="/:id(\d+)" component={PokemonDetailPage} />
                <Route path="/" component={PokemonCatalog} />
            </Switch>
            {/* <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Pokemon
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <FilterListIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Deck /> */}
        </ApolloProvider>
    );
}

export default App;
