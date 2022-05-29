import React from 'react';
import { Container } from '@material-ui/core';

type Props = {
    id: string;
    large: boolean;
    mainHeadingOne: string | null;
    mainHeadingTwo: string | null;
    mainHeadingThree: string | null;
    mainParagraph: string | null;
    secondaryHeading: string | null;
    children: JSX.Element | null;
};

function Section(props: Props): JSX.Element {
    const {
        id,
        large,
        mainHeadingOne,
        mainHeadingTwo,
        mainHeadingThree,
        mainParagraph,
        secondaryHeading,
        children,
    } = props;

    return (
        <Container maxWidth={large ? 'lg' : 'md'}>
            <div id={id} className="content">
                <div className="panel">
                    <h1 id="heading">
                        <span className="text-secondary">{mainHeadingOne}</span>
                        <span className="text-primary">{mainHeadingTwo}</span>
                        <span>{mainHeadingThree}</span>
                    </h1>
                    <p>{mainParagraph}</p>
                </div>
                <div className="panel">
                    <h2>{secondaryHeading}</h2>
                    <div>{children}</div>
                </div>
            </div>
        </Container>
    );
}

export default Section;
