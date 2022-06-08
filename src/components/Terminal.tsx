import React from 'react';
import TextLink from './TextLink';

function Terminal(): JSX.Element {
    const welcomeMessages = [
        `Welcome to KJWorks!`,
        ``,
        `$ o/ Hello there 👋, I'm Kestutis Jakseboga`,
        `$ A "Full Stack" engineer`,
        ``,
    ];

    return (
        <div className="terminal">
            <div className="title-bar">
                <div className="title">guest@kjworks.tech</div>

                <div className="circle first" />
                <div className="circle second" />
                <div className="circle third" />
            </div>
            <div className="window">
                {welcomeMessages.map((message, index) => (
                    <div
                        className="terminal-log"
                        key={`message-${message + index}`}
                    >
                        {message}
                    </div>
                ))}
                <TextLink link="https://google.com" text="TestLink" />
                <div className="command-line">guest@kjworks.tech $</div>
            </div>
        </div>
    );
}

export default Terminal;
