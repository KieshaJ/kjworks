import React from 'react';

import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

const Layout = (): JSX.Element => {
    return (
        <div className="layout">
            <Navigation />
            <Content />
            <Footer />
        </div>
    );
};

export default Layout;
