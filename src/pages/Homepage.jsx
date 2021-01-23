import React, { cloneElement } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from '../assets/pfp.JPEG';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import MeganFox from '../assets/meganfox.png';
import Row from 'react-bootstrap/Row';

import Home from './home/Home';
import Settings from './settings/Settings';
import About from './about/About';
import SignUp from './signup/SignUp';
import ProfileCard from '../components/ProfileCard';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

const useStyles = () => ({
  root: {
    minHeight: "100%",
  },
})

const Homepage = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">Chicken Fox</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/settings">Settings</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Homepage
