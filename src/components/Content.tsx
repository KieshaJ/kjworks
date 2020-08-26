import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Panel from './Panel';
import Tabs from './Tabs';

const Content = (): JSX.Element => {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <Panel
                        classes="home-panel"
                        useDefaultClass={false}
                        animated
                    >
                        <h1 id="home-heading">
                            <div className="text-primary">Hi! </div>
                            My name is Kęstutis Jakseboga (KJ) and I am a
                            <div className="text-primary">
                                {' '}
                                full-stack developer.
                            </div>
                        </h1>
                    </Panel>
                </Route>
                <Route exact path="/about">
                    <Panel
                        key="about-left"
                        panelHeading="TEST"
                        classes="panel left-panel"
                        animated
                    >
                        <p />
                    </Panel>
                    <Panel
                        key="about-right"
                        panelHeading="TEST"
                        classes="panel right-panel"
                        animated
                    >
                        <p />
                    </Panel>
                </Route>
                <Route exact path="/portfolio">
                    <Panel
                        key="portfolio-panel"
                        panelHeading="Portfolio"
                        classes="portfolio-panel"
                        useDefaultClass={false}
                        animated
                    >
                        <Tabs>
                            <div id="React">
                                <h1>React</h1>
                            </div>
                            <div id="Node">
                                <h1>Node</h1>
                            </div>
                            <div id="NPM">
                                <h1>NPM</h1>
                            </div>
                            <div id="Java">
                                <h1>Java</h1>
                            </div>
                            <div id="GFX">
                                <h1>Graphics</h1>
                            </div>
                        </Tabs>
                    </Panel>
                </Route>
                <Route exact path="/contact">
                    <Panel
                        key="contact-left"
                        panelHeading="TEST"
                        classes="panel left-panel"
                        animated
                    >
                        <p />
                    </Panel>
                    <Panel
                        key="contact-right"
                        panelHeading="TEST"
                        classes="panel right-panel"
                        animated
                    >
                        <p />
                    </Panel>
                </Route>
            </Switch>
        </div>
    );
};

export default Content;
