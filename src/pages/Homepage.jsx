import React, { cloneElement } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from '../assets/pfp.JPEG';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import MeganFox from '../assets/meganfox.png'
import Row from 'react-bootstrap/Row';
import ProfileCard from '../components/ProfileCard'

const useStyles = () => ({
  root: {
    minHeight: "100%",
  },
})

const Homepage = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root} id="#home">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Chicken Fox</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Settings</Nav.Link>
        </Nav>
      </Navbar>
      <ProfileCard />
      <Container style={{display: "flex", justifyContent:"center"}}>
        <Row style={{width:"100%", paddingBottom: 50}}>
          <Card style={{width:"100%", minWidth: "300"}}>
            <Card.Img variant="top" src={MeganFox} />
            <Card.Body>
              <Card.Title>Bok Bok, Mrs. Fox</Card.Title>
              <Card.Text>
                It's time to turn Megan Fox into a chicken. You ready
                for that kind of power? Well I'll tell you what, I sure
                am. Start by uploading your Megan Fox.
              </Card.Text>
              <Button variant="outline-success">Upload</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage
