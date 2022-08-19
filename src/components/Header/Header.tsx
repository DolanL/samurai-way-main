import React from 'react';
import s from "./Header.module.css"
import logo from '../../imgs/header__logo.png'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="header_logo"/>
        </header>
    );
};

export default Header;