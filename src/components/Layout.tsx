import React from 'react';

import PageDecorations from './PageDecorations';
import Footer from './Footer';
import Logo from './Logo';
import Terminal from './Terminal';

function Layout(): JSX.Element {
    return (
        <div className="layout">
            <div className="bg-image" />

            <Logo />
            <PageDecorations />
            <Terminal />
            <Footer />
        </div>
    );
}

export default Layout;
