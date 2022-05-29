import React, { useState } from 'react';

import Navigation from './Navigation';
import PageIndicator from './PageIndicator';
import Sections from './Sections';
import PageDecorations from './PageDecorations';

function Layout(): JSX.Element {
    const [path, setPath] = useState(window.location.pathname);

    return (
        <div className="layout">
            <div className="bg-image" />

            <Navigation path={path} setPath={setPath} />
            <PageIndicator path={path} />

            <PageDecorations />

            <Sections />

            {/* <Footer /> */}
        </div>
    );
}

export default Layout;
