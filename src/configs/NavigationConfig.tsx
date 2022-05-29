import { Build, Code, ContactMail, Home, Info } from '@material-ui/icons';
import React from 'react';

const NavigationConfig = {
    links: [
        {
            id: 'link-1',
            url: '/',
            sectionId: '#home',
            text: 'Home',
            icon: <Home />,
        },
        {
            id: 'link-2',
            url: '/about',
            sectionId: '#about',
            text: 'About',
            icon: <Info />,
        },
        {
            id: 'link-3',
            url: '/skills',
            sectionId: '#skills',
            text: 'Skills',
            icon: <Build />,
        },
        {
            id: 'link-4',
            url: '/works',
            sectionId: '#works',
            text: 'Works',
            icon: <Code />,
        },
        {
            id: 'link-5',
            url: '/contact',
            sectionId: '#contact',
            text: 'Contact',
            icon: <ContactMail />,
        },
    ],
};

export default NavigationConfig;
