import { Dispatch, SetStateAction } from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import CustomPagination from '../components/CustomPagination';

it('matches snapshot', () => {
    const setter: Dispatch<SetStateAction<number>> = () => {};

    const tree = renderer
        .create(
            <MemoryRouter>
                <CustomPagination currentPage={1} setCurrentPage={setter} />
            </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
