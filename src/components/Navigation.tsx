import React, {useState} from 'react';

import MenuLink from './MenuLink';
import logo from '../images/logo1.png';

type Props = {
    path: string;
    setPath: Function;
    links: Array<any>;
};

const Navigation = (props: Props): JSX.Element => {
    const {path, setPath, links} = props;
    const [open] = useState(false);

    const navigate = (e: React.MouseEvent, newPath: string): void => {
        const id = newPath.split("/")[1] || "home";
        const el = document.getElementById(id);
        e.preventDefault();
        el && el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState("id", "KJ Works",  newPath);
        setPath(newPath);
    };

    return (
        <div className="navigation">
            <div className="logo-container">
                <a href="/">
                    <img className="menu-logo" src={logo} alt="KJWorks"/>
                </a>
            </div>
            {/*<button*/}
            {/*    type="button"*/}
            {/*    className="menu-button"*/}
            {/*    onClick={(): void => setOpen(!open)}*/}
            {/*>*/}
            {/*    <Menu/>*/}
            {/*</button>*/}
            <div className={`main-menu ${open ? 'open' : ''}`}>
                {/*<button*/}
                {/*    className="nav-overlay"*/}
                {/*    type="button"*/}
                {/*    onClick={(): void => setOpen(!open)}*/}
                {/*>*/}
                {/*</button>*/}

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

                {/*<button*/}
                {/*    className="close-menu-button"*/}
                {/*    type="button"*/}
                {/*    onClick={(): void => setOpen(!open)}*/}
                {/*>*/}
                {/*    <Close />*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default Navigation;
