import React from "react";
import "../css/header-styles.css"
import "../favicon.svg"
import logoIcon from "../icons/logo.svg"
import searchIcon from "../icons/search.svg"

const Header = ({ onSearchChange, searchQuery, openModal }) => {
        return (
        <header className="header">
            <div className="header__inner">
                <div className="header-logo logo">
                    <img src={logoIcon} alt="logo icon"/>
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

                <button className="header-button black-button" onClick={openModal}>Вход</button>
            </div>
        </header>)
}


export default Header