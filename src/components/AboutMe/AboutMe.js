import React from 'react';
import { Paper, Typography, Box, Accordion } from '@material-ui/core';
import AboutMeAccordion from '../AboutMeAccordion/AboutMeAccordion';
import { useStyles } from './AboutMeStyles';

export default function AboutMe(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root} id='about'>
            <Typography>
                <Box fontSize="h4.fontSize">
                    About me
                </Box>
                <Box>
                    I'm a recent graduate from Durham University, where I achieved a first class honours in Physics.
                    <br/>
                    I have experience programming in Python, Java and JavaScript/React.
                    <br/>
                    I love programming because I have a passion for analysing and solving complex problems.
                </Box>
            </Typography>
            <AboutMeAccordion />
        </Paper>
    );
}
