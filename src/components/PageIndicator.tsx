import React from 'react';
import NavigationConfig from "../configs/NavigationConfig";

type Props = {
    path: string;
};

const PageIndicator = (props: Props): JSX.Element => {
    const { path } = props;
    const links = NavigationConfig.links;

    return (
        <div className="page-indicator">
            {links.map((link, index) => (
                <div key={`page-indicator-${index}`} className={`page-indicator-shape ${path === link.url ? 'active' : ''}`}/>
            ))}
        </div>
    );
};

export default PageIndicator;