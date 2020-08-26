import React from 'react';
import "./scss/App.scss"
import { BrowserRouter } from "react-router-dom";

// @ts-ignore
import { ParticleAnimation } from "react-background-animations";
import Layout from "./components/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Layout/>
                <ParticleAnimation
                    classes="bg-animation"
                    sensitivity={100}
                    siblings={10}
                    nodeMargin={50}
                    anchorLength={20}
                    mouseRadius={200}
                    r={91}
                    g={27}
                    b={43}
                />
            </div>
        </BrowserRouter>
    );
};

export default App;