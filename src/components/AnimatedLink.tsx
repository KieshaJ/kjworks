import React from 'react';

type Props = {
    href: string;
    onClick: () => void;
    customClass: string | null;
    text: string | null;
};

function AnimatedLink(props: Props) {
    const { href, onClick, customClass, text } = props;

    return (
        <div className="animated-link">
            <div className="gradient" />
            <a
                href={href}
                onClick={() => onClick}
                className={`link ${customClass}`}
            >
                <b>{text}</b>
            </a>
        </div>
    );
}

export default AnimatedLink;
