import React from "react";
import "../css/header-styles.css"
import "../favicon.svg"
import logoIcon from "../icons/logo.svg"
import searchIcon from "../icons/search.svg"
const Header = ({ onSearchChange, searchQuery }) => {
        return <header className="header">
        <div className="header-logo logo">
            <img src={logoIcon}/>
        </div>


        <div className="header-search">
            <img src={searchIcon}/>
            <input
                type="text"
                className="header-search__input"
                placeholder="Искать Таланта / Автора"
                onChange={onSearchChange}
                value={searchQuery}
            />
        </div>

        <button className="header-button black-button">
            ДОБАВИТЬ
        </button>
    </header>
}


export default Header