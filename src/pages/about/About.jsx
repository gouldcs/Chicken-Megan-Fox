import React, { cloneElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import CreatorAbout from './creator/CreatorAbout'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import ProfileImage from '../../assets/cardbg.png'
import ProjectAbout from './project/ProjectAbout'
import Row from 'react-bootstrap/Row';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

const useStyles = () => ({
  root: {
    minHeight: "100%",
  },
})

const About = (props) => {
  const classes = useStyles(props)
  const projectAbout = <ProjectAbout />
  const creatorAbout = <CreatorAbout />

  function changeActiveContent(key) {
    if (key === "#project") {
      return projectAbout;
    }
    else if (key === "#creator") {
      return creatorAbout;
    }
  }

  return (
    <div className={classes.root} id="/about">
      <Container style={{display: "flex", justifyContent:"center"}}>
        <Row style={{width:"100%", paddingBottom: 50}}>
          <div style={{paddingTop: 25, paddingBottom: 25}}>
            <Card style={{width:"100%", minWidth: "300"}}>
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="/project">The Project</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/creator">The Creator</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                {changeActiveContent(key)}
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default About
