import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('matches snapshot', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
