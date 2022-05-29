import React, { useState } from 'react';

import Tab from './Tab';

type Props = {
    children: JSX.Element[];
};

function Tabs(props: Props): JSX.Element {
    const [active, setActive] = useState(0);

    const changeActive = (index: number): void => {
        setActive(index);
    };

    const { children } = props;

    return (
        <div className="tabs">
            <ul className="tab-list">
                {children.map((child, index) => {
                    return (
                        <Tab
                            key={child.props.id}
                            active={active === index}
                            label={child.props.id}
                            onClick={(): void => changeActive(index)}
                        />
                    );
                })}
            </ul>
            <div className="tab-content">
                {children.map((child, index) => {
                    if (active === index) {
                        return child.props.children;
                    }

                    return undefined;
                })}
            </div>
        </div>
    );
}

export default Tabs;
