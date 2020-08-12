import React from 'react';
import { Typography, Box, Button, Paper } from '@material-ui/core'
import { useStyles } from './ContactMeStyles';

export default function ContactMe(props) {
    const classes = useStyles();

    return(
        <Paper className={classes.root} id='contact'>
            <Typography>
                <Box fontSize="h4.fontSize">
                    Contact Me
                </Box>
                <Box>
                    Feel free to email me with any questionr or about any opportunities, I'll get back to you ASAP!
                </Box>
            </Typography>
            <Button variant="outlined">
                Get in touch
            </Button>
        </Paper>
    );
}