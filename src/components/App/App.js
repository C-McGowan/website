import React from 'react';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import MyWork from '../MyWork/MyWork';
import { Container } from '@material-ui/core';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Home />
        <AboutMe />
        <MyWork />
      </Container>
    </div>
  );
}
