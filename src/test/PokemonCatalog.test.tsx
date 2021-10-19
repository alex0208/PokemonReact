import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import PokemonCatalog from '../routes/PokemonCatalog';

it('matches snapshot', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <PokemonCatalog />
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
