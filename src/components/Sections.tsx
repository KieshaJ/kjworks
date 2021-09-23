import React from 'react';
import Section from "./Section";
import SectionConfig from "../configs/SectionConfig";

const Sections = (): JSX.Element => {
    const sections = SectionConfig.sections;

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
                    children={section.children}
                />
            ))}
        </div>
    );
};

export default Sections;