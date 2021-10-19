import {
    Button,
    capitalize,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

import { Box, styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { PokemonQuery_pokemon_v2_pokemon_pokemon_v2_pokemonabilities } from '../graphql/generated/PokemonQuery';

interface Props {
    id: number;
    name: string;
    height: number | null;
    weight: number | null;
    pokemon_v2_pokemonabilities: PokemonQuery_pokemon_v2_pokemon_pokemon_v2_pokemonabilities[];
}

const PokemonCard = ({ id = 5, name = 'Pokemon', weight, height, pokemon_v2_pokemonabilities: abilities }: Props) => {
    return (
        <PCard sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {capitalize(name)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" component="div">
                        Height:
                        <AttributeValue>{height}</AttributeValue>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" component="div">
                        Weight:
                        <AttributeValue>{weight}</AttributeValue>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" component="div">
                        Abilities:
                        <AttributeValue>{abilities.map((a) => a.pokemon_v2_ability?.name).join(', ')}</AttributeValue>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button component={Link} to={'/' + id}>
                    More
                </Button>
            </CardActions>
        </PCard>
    );
};

const AttributeValue = styled(Box)({
    paddingLeft: 5,
    display: 'inline',
    fontWeight: 500,
});

const PCard = styled(Card)({
    minWidth: 200,
});

export default PokemonCard;
