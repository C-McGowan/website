import React, { useEffect } from 'react';
import { useStyles } from './NavBarStyles'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, Container} from '@material-ui/core';

export default function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleAboutClick = () => {
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    }

    const handleWorkClick = () => {
        document.getElementById('work').scrollIntoView({behavior: 'smooth'});
    }

    const handleContactClick = () => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }
    
    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Container>
                    <Toolbar>
                        <Typography variant='h6' className={classes.title}>
                            Test Text
                        </Typography>
                        <Tabs 
                            value={value} 
                            onChange={handleChange}
                            className={classes.tabs}
                        >
                            <Tab 
                                label="About"
                                onClick={handleAboutClick}
                            />
                            <Tab 
                                label="My Work" 
                                onClick={handleWorkClick}
                            />
                            <Tab 
                                label="Contact"
                                onClick={handleContactClick} 
                            />
                        </Tabs>
                        <Button 
                            variant="outlined" 
                            color="secondary" 
                            disableElevation 
                            className={classes.resumeButton}
                            href='#About'
                        >
                            Resume
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
