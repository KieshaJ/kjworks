import React, { useState } from 'react';
import { Menu, Close } from '@material-ui/icons';

import MenuLink from './MenuLink';
import logo from '../images/KJWorks-logo-128.png';

const Navigation = (): JSX.Element => {
    const [path, setPath] = useState(window.location.pathname);
    const [open, setOpen] = useState(false);

    const links = [
        {
            id: 'link-1',
            url: '/',
            text: 'Home',
        },
        {
            id: 'link-2',
            url: '/about',
            text: 'About',
        },
        {
            id: 'link-3',
            url: '/portfolio',
            text: 'Portfolio',
        },
        {
            id: 'link-4',
            url: '/contact',
            text: 'Contact',
        },
    ];

    const setNewPath = (newPath: string): void => setPath(newPath);

    return (
        <div className="navigation">
            <a href="/">
                <img className="menu-logo" src={logo} alt="KJWorks" />
            </a>
            <button
                type="button"
                className="menu-button"
                onClick={(): void => setOpen(!open)}
            >
                <Menu />
            </button>
            <div className={`main-menu ${open ? 'open' : ''}`}>
                <button
                    className="nav-overlay"
                    type="button"
                    onClick={(): void => setOpen(!open)}
                >
                    <div className="nav-overlay-shape nav-overlay-shape-top" />
                    <div className="nav-overlay-shape nav-overlay-shape-bottom" />
                </button>

                {links.map((link) => (
                    <MenuLink
                        key={link.id}
                        active={path === link.url}
                        url={link.url}
                        text={link.text}
                        onClick={(): void => setNewPath(link.url)}
                    />
                ))}

                <button
                    className="close-menu-button"
                    type="button"
                    onClick={(): void => setOpen(!open)}
                >
                    <Close />
                </button>

                <div className="nav-mobile-shape nav-mobile-shape-top" />
                <div className="nav-mobile-shape nav-mobile-shape-bottom" />
            </div>
            <div className="nav-shape nav-shape-left" />
            <div className="nav-shape nav-shape-right" />
        </div>
    );
};

export default Navigation;
