import React from "react";
import {Link} from 'react-router-dom';
import "../css/header-styles.css"
import "../favicon.svg"
import logoIcon from "../icons/logo.svg"
import searchIcon from "../icons/search.svg"

const Header = ({ onSearchChange, searchQuery }) => {
        return (
        <header className="header">
            <div className="header__inner">
                <div className="header-logo logo">
                    <img src={logoIcon}/>
                </div>


                <div className="header-search">
                    <img src={searchIcon} alt="search icon"/>
                    <input
                        type="text"
                        className="header-search__input"
                        placeholder="Искать Таланта / Автора"
                        onChange={onSearchChange}
                        value={searchQuery}
                    />
                </div>

                <Link to="login" className="header-button black-button">
                    Войти
                </Link>
            </div>
        </header>)
}


export default Header