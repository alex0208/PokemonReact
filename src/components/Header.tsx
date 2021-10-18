import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    styled,
    alpha,
    InputBase,
    DialogTitle,
    Dialog,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { SORTING_DIRECTION } from '../common/constants/sort';
import { order_by } from '../graphql/generated/globalTypes';

interface Props {
    setSearchTerm: Dispatch<SetStateAction<string>>;
    // searchingDirection: any
}

// const Header = ({ setSearchTerm, sortingDirection }: Props) => {
const Header = ({
    setSearchTerm,
    orderBy: [orderBy, setOrderBy],
    sortingDirection: [sortingDirection, setSortingDirection],
    pageSize,
    setPageSize,
}: any) => {
    const handleChange = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event = {}, reason = '') => {
        setOpen(false);
    };

    return (
        <AppBar position="static" sx={{ mb: 8 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Pokemon
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleChange}
                    />
                </Search>
                <IconButton
                    onClick={handleClickOpen}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <FilterListIcon />
                </IconButton>

                <Dialog
                    open={open}
                    onClose={(event, reason) => {
                        if (reason !== 'backdropClick') {
                            handleClose(event, reason);
                        }
                    }}
                >
                    <DialogTitle>Search settings</DialogTitle>
                    <DialogContent sx={{ minWidth: 300 }}>
                        <FormControl fullWidth sx={{ mt: 3 }}>
                            <InputLabel id="demo-simple-select-label">
                                Sort by
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={orderBy}
                                label="Sort by"
                                onChange={(e: SelectChangeEvent<string>) =>
                                    setOrderBy(e.target.value)
                                }
                            >
                                <MenuItem value={SORTING_DIRECTION.NAME}>
                                    Name
                                </MenuItem>
                                <MenuItem value={SORTING_DIRECTION.HEIGHT}>
                                    Height
                                </MenuItem>
                                <MenuItem value={SORTING_DIRECTION.WEIGHT}>
                                    Weight
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={{ mt: 3 }}>
                            <InputLabel id="demo-simple-select-label">
                                Sorting direction
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sortingDirection}
                                label="Sort direction"
                                onChange={(e: SelectChangeEvent<string>) =>
                                    setSortingDirection(e.target.value)
                                }
                            >
                                <MenuItem value={order_by.asc}>
                                    Ascending
                                </MenuItem>
                                <MenuItem value={order_by.desc}>
                                    Descending
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ mt: 3 }}>
                            <InputLabel id="demo-simple-select-label">
                                Page size
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={pageSize}
                                label="Sort direction"
                                onChange={(e: SelectChangeEvent<number>) =>
                                    setPageSize(e.target.value)
                                }
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Toolbar>
        </AppBar>
    );
};

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 20,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default Header;
