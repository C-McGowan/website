import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import MyWork from '../MyWork/MyWork';
import ContactMe from '../ContactMe/ContactMe'
import { Container, Button } from '@material-ui/core';
import { Element } from 'react-scroll';

export default function App() {
  return (
    <div className="App" id='app'>
      <NavBar />
      <Container>
        <Home />
        <AboutMe />
        <MyWork />
        <ContactMe />
      </Container>
    </div>
  );
}
