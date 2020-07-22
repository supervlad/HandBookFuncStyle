import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const PaginationBox = ({showCurrentPage, amountPage}) => {

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        showCurrentPage(value);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination count={amountPage} color="primary" page={page} onChange={handleChange} />
        </div>
    )
}