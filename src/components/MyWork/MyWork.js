import React from 'react';
import MyWorkCard from '../MyWorkCard/MyWorkCard';
import { MyWorkInfo } from './MyWorkInfo';
import { useStyles } from './MyWorkStyles';
import { Grid, Typography, Box, Paper } from '@material-ui/core';

export default function MyWork(props) {
    const classes = useStyles();

    return(
        <Paper className={classes.root} id='work'>
            <Typography>
                <Box fontSize="h4.fontSize" >
                    My Work
                </Box>
            </Typography>
            <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                {MyWorkInfo.map(project => (
                    <Grid item xs={3}>
                        <MyWorkCard info={project}/>
                    </Grid>  
                ))}
            </Grid>
        </Paper>
    );
}