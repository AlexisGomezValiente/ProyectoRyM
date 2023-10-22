import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Nav.module.css';

const Nav = (props) => {
    return(
        <div>
            <SearchBar onSearch={props.onSearch} characterRandom={props.characterRandom} />
        </div>
    );
};

export default Nav;