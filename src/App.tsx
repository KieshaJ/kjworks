import React from 'react';
import './scss/App.scss';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Layout />
            </div>
        </BrowserRouter>
    );
}

export default App;
