import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

it('matches snapshot', () => {
    const data = {
        searchTerm: [],
        orderBy: [],
        sortingDirection: [],
        pageSize: 20,
        setPageSize: () => {},
    };

    const tree = renderer
        .create(
            <MemoryRouter>
                <Header {...data} />
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
