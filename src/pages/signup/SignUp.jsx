import React, { cloneElement } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import MeganFox from '../../assets/meganfox.png'
import Row from 'react-bootstrap/Row';
import ProfileCard from '../../components/ProfileCard'
import Form from 'react-bootstrap/Form'

const useStyles = () => ({
  root: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
  },

  formStyle: {
    width: "60%",
  },
})

function update_text() {
  generateRandomNumber();
}

function generateRandomNumber() {
  const areaCode = Math.floor(Math.random() * Math.floor(999)) + 100;
  const midNumbers = Math.floor(Math.random() * Math.floor(999));
  const lastNumbers = Math.floor(Math.random() * Math.floor(9999));
  const phoneNumber = "(" + areaCode + ")-" + midNumbers + "-" + lastNumbers ;
  return phoneNumber;
}

const Homepage = (props) => {
  const classes = useStyles(props)
  var phoneNumber = "Click 'Generate Phone Number' for your phone number."

  return (
    <div className={classes.root} id="/signup">
      <div cardContainer style={{display: "flex", justifyContent:"center"}}>
        <Card style={{padding: 25, width: "60%"}}>
          <div style={{paddingLeft: 50, paddingRight: 50}}>
          <Form.Group>
            <Form.Control size="sm" as="select">
              <option>First Name</option>
            </Form.Control>
            <br />
            <Form.Control size="sm" as="select">
              <option>Last Name</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={phoneNumber = this.generateRandomNumber.bind(this)}>Generate Phone Number</Button>
          <div>Your Number: {phoneNumber}</div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Homepage