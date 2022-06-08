import React from 'react';
import logo from '../images/logo1A.png';

function Logo(): JSX.Element {
    return (
        <div className="logo">
            <a href="/">
                <img className="logo-img" src={logo} alt="KJWorks" />
            </a>
        </div>
    );
}

export default Logo;
