import React from 'react';
import { Paper, Typography, Button, Box } from '@material-ui/core';

export default function Home(props) {
    return(
        <Paper>
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