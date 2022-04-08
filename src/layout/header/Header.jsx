import React from 'react';
import {Button} from "../../components";

const Header = () => {
    return (
        <div className="headerPage">
            <Button name="Products Page" navLink="/products-page"/>
            <Button name="Categories Page" navLink="/categories-page"/>
        </div>
    );
};

export default Header;