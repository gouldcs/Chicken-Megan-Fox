import React, { cloneElement } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import MeganFox from '../../assets/meganfox.png'
import Row from 'react-bootstrap/Row';
import ProfileCard from '../../components/ProfileCard'

const useStyles = () => ({
  root: {
    minHeight: "100%",
  },
})

const Homepage = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root} id="/home">
      <ProfileCard />
      <Container style={{display: "flex", justifyContent:"center"}}>
        <Row style={{width:"100%", paddingBottom: 50}}>
          <Card style={{width:"100%", minWidth: "300"}}>
            <Card.Img variant="top" src={MeganFox} />
            <Card.Body style={{display: "flex", flexDirection: "column", alignItems: "left"}}>
              <Card.Title style={{display:"flex", justifyContent:"flex-start"}}>Bok Bok, Mrs. Fox</Card.Title>
              <Card.Text style={{textAlign:"left"}}>
                It's time to turn Megan Fox into a chicken. You ready
                for that kind of power? Well I'll tell you what, I sure
                am. Start by uploading your Megan Fox.
              </Card.Text>
              <Button style={{justifySelf: "left", width:"20%", minWidth:100}} variant="outline-success">Upload</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage
