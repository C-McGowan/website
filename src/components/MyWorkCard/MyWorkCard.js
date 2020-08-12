import React from 'react';
import { Collapse, Card, CardMedia, CardContent, CardActions, IconButton, Typography, CardHeader } from '@material-ui/core';
import { ExpandMore, GitHub } from '@material-ui/icons'
import { useStyles } from './MyWorkCardStyles'

export default function MyWorkCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return(
        <Card>
            <CardMedia
                className={classes.media}
                image={props.info.image}
                title='image'
            />
            <CardHeader 
                    title={props.info.title}
                    subheader={props.info.languages}
                    action={
                        <IconButton aria-label="github" href={props.info.link} target='_blank'>
                            <GitHub />
                        </IconButton>
                    }
            />
            <CardContent>
                <Typography>
                    {props.info.projectInfo}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    className={expanded ? classes.expandOpen : classes.expand}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMore />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>
                        {props.info.collapseInfo}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}