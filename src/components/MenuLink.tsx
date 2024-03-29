import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    active: boolean;
    url: string;
    children: JSX.Element;
    onClick: MouseEventHandler;
};

function MenuLink(props: Props): JSX.Element {
    const { active, url, children, onClick } = props;

    return (
        <Link
            to={url}
            className={`menu-link ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <span className="bubble bubble-1" />
            <span className="bubble bubble-2" />
            <span className="bubble bubble-3" />
            <div className="link-content">{children}</div>
        </Link>
    );
}

export default MenuLink;
