import React from 'react';

type Props = {
    link: string;
    text: string;
};

function TextLink(props: Props): JSX.Element {
    const { link, text } = props;

    return (
        <div className="text-link">
            (<a href={link}>{text}</a>)
        </div>
    );
}

export default TextLink;
