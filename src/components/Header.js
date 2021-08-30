import React from 'react';
import Logo from '../assets/images/logo_bold.png';
import '../assets/styles/core.css';

export default function Header({currentPage}){

    return(
        <header className="header">
            <a href="/">
                <img className="logo" src={Logo} alt="Prepercolator Logo"></img>
            </a>

            <nav>
                Nav Items
            </nav>
        </header>
    );
}