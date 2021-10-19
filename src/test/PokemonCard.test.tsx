import { cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import PokemonCard from '../components/PokemonCard';

afterEach(cleanup);

it('matches snapshot', () => {
    const props = {
        id: 5,
        name: 'charmeleon',
        height: 11,
        weight: 190,
    };

    const tree = renderer
        .create(
            <MemoryRouter>
                <PokemonCard {...props} />
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
