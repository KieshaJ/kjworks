import React from 'react';
import Section from './Section';
import SectionConfig from '../configs/SectionConfig';

function Sections(): JSX.Element {
    const { sections } = SectionConfig;

    return (
        <div>
            {sections.map((section) => (
                <Section
                    id={section.id}
                    large={section.large}
                    mainHeadingOne={section.mainHeadingOne}
                    mainHeadingTwo={section.mainHeadingTwo}
                    mainHeadingThree={section.mainHeadingThree}
                    mainParagraph={section.mainParagraph}
                    secondaryHeading={section.secondaryHeading}
                >
                    {section.children}
                </Section>
            ))}
        </div>
    );
}

export default Sections;
