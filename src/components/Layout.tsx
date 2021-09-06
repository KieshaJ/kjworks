import React, {useState} from 'react';

import Navigation from './Navigation';
import Section from './Section';
import {Build, Code, ContactMail, Home, Info} from "@material-ui/icons";
import {Grid} from "@material-ui/core";
import Tabs from "./Tabs";

const Layout = (): JSX.Element => {
    const [path, setPath] = useState(window.location.pathname);
    const links = [
        {
            id: 'link-1',
            url: '/',
            sectionId: '#home',
            text: 'Home',
            icon: <Home/>
        },
        {
            id: 'link-2',
            url: '/about',
            sectionId: '#about',
            text: 'About',
            icon: <Info/>
        },
        {
            id: 'link-3',
            url: '/skills',
            sectionId: '#skills',
            text: 'Skills',
            icon: <Build/>
        },
        {
            id: 'link-4',
            url: '/works',
            sectionId: '#works',
            text: 'Works',
            icon: <Code/>
        },
        {
            id: 'link-5',
            url: '/contact',
            sectionId: "#contact",
            text: 'Contact',
            icon: <ContactMail/>
        }
    ];

    return (
        <div className="layout">
            <Navigation path={path} setPath={setPath} links={links}/>

            <div className="bg-image"/>
            <div className="page-indicator">
                {links.map((link) => (
                    <div className={`page-indicator-shape ${path === link.url ? 'active' : ''}`}/>
                ))}
            </div>

            <svg className="layout-shape-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1460 320">
                <path fill="#9d427f" fillOpacity="1"
                      d="M0,160L30,170.7C60,181,120,203,180,224C240,245,300,267,360,266.7C420,267,480,245,540,213.3C600,181,660,139,720,128C780,117,840,139,900,128C960,117,1020,75,1080,90.7C1140,107,1200,181,1260,192C1320,203,1380,149,1410,122.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"/>
            </svg>

            <svg className="layout-shape-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#c4539f" fillOpacity="1"
                      d="M0,160L30,170.7C60,181,120,203,180,224C240,245,300,267,360,266.7C420,267,480,245,540,213.3C600,181,660,139,720,128C780,117,840,139,900,128C960,117,1020,75,1080,90.7C1140,107,1200,181,1260,192C1320,203,1380,149,1410,122.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"/>
            </svg>

            <svg className="layout-shape-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 320">
                <path fill="#008bbf" fillOpacity="1"
                      d="M0,256L34.3,240C68.6,224,137,192,206,165.3C274.3,139,343,117,411,106.7C480,96,549,96,617,96C685.7,96,754,96,823,122.7C891.4,149,960,203,1029,218.7C1097.1,235,1166,213,1234,181.3C1302.9,149,1371,107,1406,85.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"/>
            </svg>

            <svg className="layout-shape-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#00aeef" fillOpacity="1"
                      d="M0,256L34.3,240C68.6,224,137,192,206,165.3C274.3,139,343,117,411,106.7C480,96,549,96,617,96C685.7,96,754,96,823,122.7C891.4,149,960,203,1029,218.7C1097.1,235,1166,213,1234,181.3C1302.9,149,1371,107,1406,85.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"/>
            </svg>

            <Section
                id="home"
                large={false}
                mainHeadingOne="KJ"
                mainHeadingTwo=" Works"
                mainHeadingThree={null}
                mainParagraph="I am your professional software engineer"
                secondaryHeading={null}
                children={null}
            />
            <Section
                id="about"
                large={false}
                mainHeadingOne={null}
                mainHeadingTwo={null}
                mainHeadingThree="About"
                mainParagraph="This is what I am about"
                secondaryHeading="Hop over to see what skills I have"
            >
                <div>
                    <Grid container spacing={4}>
                        <Grid item>
                            <Tabs>
                                <div id="Mission">
                                    <h2>Mission</h2>
                                </div>
                                <div id="Vision">
                                    <h2>Vision</h2>
                                </div>
                                <div id="Values">
                                    <h2>Values</h2>
                                </div>
                                {/*<div id="Java">*/}
                                {/*    <h2>Java</h2>*/}
                                {/*</div>*/}
                                {/*<div id="GFX">*/}
                                {/*    <h2>Graphics</h2>*/}
                                {/*</div>*/}
                            </Tabs>
                        </Grid>
                    </Grid>
                </div>
            </Section>
            <Section
                id="skills"
                large={true}
                mainHeadingOne={null}
                mainHeadingTwo={null}
                mainHeadingThree="Skills"
                mainParagraph="This is what I am good at"
                secondaryHeading="Continue to see my works"
                children={null}
            />
            <Section
                id="works"
                large={true}
                mainHeadingOne={null}
                mainHeadingTwo={null}
                mainHeadingThree="Works"
                mainParagraph={null}
                secondaryHeading={null}
            >
                <div>
                    <p>Slider/Tabs/Thingy should go here</p>
                </div>
            </Section>
            <Section
                id="contact"
                large={false}
                mainHeadingOne={null}
                mainHeadingTwo={null}
                mainHeadingThree="Contact"
                mainParagraph="This is how you may find me"
                secondaryHeading={null}
            >
                <div>
                    <p>
                        Contact stuffs
                    </p>
                </div>
            </Section>

            {/*<Footer />*/}
        </div>
    );
};

export default Layout;
