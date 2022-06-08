import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './fonts/WarowniaUlt.otf';

const rootContainer = document.getElementById('root');
if (rootContainer) {
    const root = createRoot(rootContainer);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
