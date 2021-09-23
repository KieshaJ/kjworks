import React from 'react';

type Props = {
    href: string;
    onClick: Function;
    customClass: string | null;
    text: string | null;
};

const AnimatedLink = (props: Props) => {
    const {href, onClick, text} = props;

    return (
        <div className="animated-link">
            <div className="gradient"/>
            <a href={href} onClick={() => onClick} className="link">
                <b>{text}</b>
            </a>
        </div>
    );
};

export default AnimatedLink;