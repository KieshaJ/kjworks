import React, { useState } from 'react';

import MenuLink from './MenuLink';
import logo from '../images/logo1.png';
import NavigationConfig from '../configs/NavigationConfig';

type Props = {
    path: string;
    setPath: (path: string) => void;
};

function Navigation(props: Props): JSX.Element {
    const { path, setPath } = props;
    const { links } = NavigationConfig;
    const [open] = useState(false);

    const navigate = (e: React.MouseEvent, newPath: string): void => {
        const id = newPath.split('/')[1] || 'home';
        const el = document.getElementById(id);
        e.preventDefault();
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState('id', 'KJ Works', newPath);
        setPath(newPath);
    };

    return (
        <div className="navigation">
            <div className="logo-container">
                <a href="/">
                    <img className="menu-logo" src={logo} alt="KJWorks" />
                </a>
            </div>
            <div className={`main-menu ${open ? 'open' : ''}`}>
                {links.map((link) => (
                    <MenuLink
                        active={path === link.url}
                        key={link.id}
                        url={link.url}
                        onClick={(e) => navigate(e, link.url)}
                    >
                        {link.icon}
                    </MenuLink>
                ))}
            </div>
        </div>
    );
}

export default Navigation;
