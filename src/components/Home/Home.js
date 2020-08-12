import React from 'react';
import { Paper, Typography, Button, Box } from '@material-ui/core';
import { useStyles } from './HomeStyles';

export default function Home(props) {
    const classes = useStyles();
        
    return(
        <Paper className={classes.root} id='home'>
            <Typography>
                <Box fontSize="h5.fontSize">
                    Hi, my name is
                </Box>
                <Box fontSize="h2.fontSize" fontWeight="fontWeightMedium">
                    Callum McGowan.
                </Box>
                <Box fontSize="h3.fontSize">
                    I'm an aspiring Software Developer.
                </Box>
                <Box>
                    I'm a recent Durham University Physics graduate based in the UK.
                    <br/>
                    I have a passion for all things programming.
                </Box>
            </Typography>
            <Button variant="outlined">
                Contact Me
            </Button>
        </Paper>
    );
}