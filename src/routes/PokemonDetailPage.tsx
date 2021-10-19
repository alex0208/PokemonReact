import { useQuery } from '@apollo/client';
import {
    Breadcrumbs,
    Container,
    Link,
    Stack,
    Typography,
    capitalize,
    CardMedia,
    Skeleton,
    Card,
    Divider,
    List,
    ListItem,
} from '@mui/material';
import { RouteComponentProps } from 'react-router';
import { PokemonDetails, PokemonDetailsVariables } from '../graphql/generated/PokemonDetails';
import { POKEMON_DETAIL_QUERY } from '../graphql/queries/pokemonDetail';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Props extends RouteComponentProps<MatchParams> {}
interface MatchParams {
    id: string;
}

const PokemonDetailPage = ({ match }: Props) => {
    const pokemonId: number = +match.params.id;

    const { data } = useQuery<PokemonDetails, PokemonDetailsVariables>(POKEMON_DETAIL_QUERY, {
        variables: { id: pokemonId },
    });
    const pokemonData = data?.pokemon_v2_pokemon[0];

    return (
        <Container maxWidth="sm" sx={{ my: 10 }}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link underline="hover" key="1" color="inherit" href="/">
                    Catalog
                </Link>

                <Typography key="2" color="text.primary">
                    {pokemonData?.name}
                </Typography>
            </Breadcrumbs>
            <Card sx={{ mt: 5 }}>
                <Stack>
                    <Typography variant="h4" my={5} mx={'auto'}>
                        {capitalize(pokemonData?.name || '')}
                    </Typography>
                    {pokemonData ? (
                        <CardMedia
                            component="img"
                            sx={{ maxHeight: 300, maxWidth: 300, mx: 'auto' }}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
                            alt={pokemonData.name || ''}
                        />
                    ) : (
                        <Skeleton variant="rectangular" height={300} width={300} sx={{ mx: 'auto' }} />
                    )}

                    <List component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Pokemon type:
                            </Typography>
                            <Typography>
                                {pokemonData?.pokemon_v2_pokemontypes
                                    .map((type) => type.pokemon_v2_type?.name)
                                    .join(', ')}
                            </Typography>
                            <Typography>{pokemonData?.pokemon_v2_pokemontypes[0].pokemon_v2_type?.name}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Base Experience:
                            </Typography>
                            <Typography>{pokemonData?.base_experience}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                HP:
                            </Typography>
                            <Typography>{pokemonData?.pokemon_v2_pokemonstats[0].base_stat}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Attack:
                            </Typography>
                            <Typography>{pokemonData?.pokemon_v2_pokemonstats[1].base_stat}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Defense:
                            </Typography>
                            <Typography>{pokemonData?.pokemon_v2_pokemonstats[2].base_stat}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Special Attack:
                            </Typography>
                            <Typography>{pokemonData?.pokemon_v2_pokemonstats[3].base_stat}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Special Defense:
                            </Typography>
                            <Typography>{pokemonData?.pokemon_v2_pokemonstats[4].base_stat}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Speed:
                            </Typography>
                            <Typography>{pokemonData?.pokemon_v2_pokemonstats[5].base_stat}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Height:
                            </Typography>
                            <Typography>{pokemonData?.height}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Weight:
                            </Typography>
                            <Typography>{pokemonData?.weight}</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Typography mr={1} color="#888">
                                Abilities:
                            </Typography>
                            <Typography>
                                {pokemonData?.pokemon_v2_pokemonabilities
                                    .map((a) => a.pokemon_v2_ability?.name)
                                    .join(', ')}
                            </Typography>
                        </ListItem>
                    </List>
                </Stack>
            </Card>
        </Container>
    );
};

export default PokemonDetailPage;
