import React from 'react';
import NavigationConfig from '../configs/NavigationConfig';

type Props = {
    path: string;
};

function PageIndicator(props: Props): JSX.Element {
    const { path } = props;
    const { links } = NavigationConfig;

    return (
        <div className="page-indicator">
            {links.map((link) => (
                <div
                    key={`page-indicator-${link.id}`}
                    className={`page-indicator-shape ${
                        path === link.url ? 'active' : ''
                    }`}
                />
            ))}
        </div>
    );
}

export default PageIndicator;
