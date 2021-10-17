import { FC } from 'react';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<MatchParams> {}
interface MatchParams {
    id: string;
}

const PokemonDetailPage: FC<Props> = ({ match }) => {
    const pokemonId = match.params.id;

    console.log(typeof pokemonId);
    return <div>pokemon detail page {pokemonId}</div>;
};

export default PokemonDetailPage;
