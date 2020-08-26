import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    active: boolean;
    text: string;
    url: string;
    onClick: MouseEventHandler;
};

const MenuLink = (props: Props): JSX.Element => {
    const { active, text, url, onClick } = props;

    return (
        <Link
            to={url}
            className={`menu-link ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <span className="bubble bubble-1" />
            <span className="bubble bubble-2" />
            <span className="bubble bubble-3" />
            <div>{text}</div>
        </Link>
    );
};

export default MenuLink;
