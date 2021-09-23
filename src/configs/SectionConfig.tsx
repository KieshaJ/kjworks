import React from "react";
import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import Tabs from "../components/Tabs";
import AnimatedLink from "../components/AnimatedLink";

const SectionConfig = {
    sections: [
        {
            id: "home",
            large: false,
            mainHeadingOne: "KJ",
            mainHeadingTwo: " WORKS",
            mainHeadingThree: null,
            mainParagraph: "Your favorite nerd for hire",
            secondaryHeading: null,
            children: <AnimatedLink
                href=""
                onClick={() => console.log('test')}
                customClass="home-cta"
                text="JUMP TO MY WORKS"
            />
        },
        {
            id: "about",
            large: false,
            mainHeadingOne: null,
            mainHeadingTwo: "About",
            mainHeadingThree: null,
            mainParagraph: null,
            secondaryHeading: null,
            children: <div>
                <Grid container>
                    <Tabs>
                        <div id="Who">
                            <h3>Who?</h3>
                        </div>
                        <div id="What">
                            <h3>What?</h3>
                        </div>
                        <div id="Why">
                            <h3>Why?</h3>
                            <Grid container spacing={1}>
                                <Grid item xs>
                                    <Card className="card">
                                        <CardHeader title="Quality and Satisfaction" />
                                        <CardContent>
                                            <p>test</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs>
                                    <Card className="card">
                                        <CardHeader title="Respect and Trust" />
                                        <CardContent>
                                            <p>test</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs>
                                    <Card className="card">
                                        <CardHeader title="Passion and Engagement" />
                                        <CardContent>
                                            <p>test</p>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    </Tabs>
                </Grid>
            </div>
        },
        {
            id: "skills",
            large: true,
            mainHeadingOne: "Skills",
            mainHeadingTwo: null,
            mainHeadingThree: null,
            mainParagraph: "This is what I am good at",
            secondaryHeading: null,
            children: <Grid container spacing={1} alignContent="center" alignItems="center">
                <Grid className="item" item xs>
                    <div>Java</div>
                </Grid>
                <Grid className="item" item xs>
                    <div>Python</div>
                </Grid>
                <Grid className="item" item xs>
                    <div>JavaScript</div>
                </Grid>
                <Grid className="item" item xs>
                    <div>Docker</div>
                </Grid>
                <Grid className="item" item xs>
                    <div>Terraform</div>
                </Grid>
                <Grid className="item" item xs>
                    <div>AWS</div>
                </Grid>
                <Grid className="item" item xs>
                    <div>React</div>
                </Grid>
                <Grid className="item" item xs>
                    <div>MicroServices</div>
                </Grid>
                <Grid className="item" item xs>
                    <div>Rest</div>
                </Grid>
            </Grid>
        },
        {
            id: "works",
            large: true,
            mainHeadingOne: null,
            mainHeadingTwo: "WORKS",
            mainHeadingThree: null,
            mainParagraph: null,
            secondaryHeading: null,
            children: <div>
                <p>Slider/Tabs/Thingy should go here</p>
            </div>
        },
        {
            id: "contact",
            large: false,
            mainHeadingOne: "CONTACT",
            mainHeadingTwo: null,
            mainHeadingThree: null,
            mainParagraph: "This is how you may find me",
            secondaryHeading: null,
            children: <div>
                <p>
                    Contact stuffs
                </p>
            </div>
        }
    ]
};

export default SectionConfig;