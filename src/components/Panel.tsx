import React, { useState, useEffect } from 'react';

type Props = {
    panelHeading: string | null;
    classes: string | null;
    useDefaultClass: boolean | true;
    animated: boolean | null;
    children: JSX.Element;
};

function Panel(props: Props): JSX.Element {
    const [loaded, setLoaded] = useState(false);

    const { panelHeading, classes, useDefaultClass, animated, children } =
        props;

    useEffect(() => {
        if (animated) {
            setTimeout(() => {
                setLoaded(true);
            }, 200);
        }
    });

    return (
        <div
            className={`panel-padding ${
                useDefaultClass ? 'panel' : ''
            } ${classes} ${loaded ? 'loaded' : ''}`}
        >
            <h1 className="panel-heading">{panelHeading}</h1>
            {children}
            <span className="panel-shape panel-shape-1" />
            <span className="panel-shape panel-shape-2" />
            <span className="panel-shape panel-shape-3" />
        </div>
    );
}

export default Panel;
