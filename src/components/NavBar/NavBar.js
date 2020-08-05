import React from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, Container } from '@material-ui/core';

export default function NavBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <AppBar position="static" >
                <Container>
                    <Toolbar>
                        <Typography variant='h6'>
                            Test Text
                        </Typography>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="About" />
                            <Tab label="My Work" />
                            <Tab label="Contact" />
                        </Tabs>
                        <Button variant="outlined" color="secondary" disableElevation>
                            Resume
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
