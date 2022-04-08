import React from 'react';
import PropTypes from "prop-types";
import {Stack} from "@mui/material";
import PaginationMUI from '@mui/material/Pagination';

const Pagination = ({changeCurrentPage, count, defaultPage = 1}) => {

    return (
        <Stack spacing={2}>
            <PaginationMUI defaultPage={defaultPage} count={Math.ceil(count / 10)} onChange={changeCurrentPage} />
        </Stack>
    );
};

Pagination.propTypes = {
    defaultPage: PropTypes.number,
    count: PropTypes.number.isRequired,
    changeCurrentPage: PropTypes.func.isRequired
}

export default Pagination;