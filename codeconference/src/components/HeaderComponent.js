import React from 'react';
import logo from '../assets/logo.svg';

export const HeaderComponent = () => {
    return (
        <header className="header">
            <img src={logo} className="logoImg" alt="Logo" />
        </header>
    )
};