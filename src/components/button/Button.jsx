import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Stack from '@mui/material/Stack';
import ButtonMUI from '@mui/material/Button';

const Button = ({name, click, navLink, children}) => {
    return (
        <Stack spacing={2} direction="row">
            <Link to={navLink} className="navLink">
                <ButtonMUI onClick={click} variant="contained">
                    {children ? children : name}
                </ButtonMUI>
            </Link>
        </Stack>
    );
};

Button.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    navLink: PropTypes.string,
    children: PropTypes.element
}

export default Button;