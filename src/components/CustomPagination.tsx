import { Pagination } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface Props {
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

const CustomPagination = ({ currentPage, setCurrentPage }: Props) => {
    const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
        window.scrollTo(0, 0);
    };
    return (
        <Pagination
            sx={{ my: 3 }}
            count={currentPage + 2}
            siblingCount={3}
            boundaryCount={2}
            page={currentPage}
            onChange={handlePageChange}
        />
    );
};

export default CustomPagination;
