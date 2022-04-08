import React from 'react';
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';

const Input = ({name, handleChange}) => {

    return (
        <>
            <TextField
                id="outlined-name"
                label="Name"
                value={name}
                onChange={handleChange}
            />
        </>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    handlerChange: PropTypes.func
};

export default Input;