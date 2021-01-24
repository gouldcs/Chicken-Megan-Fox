import React, { useState } from 'react';

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

function setPhoneNumber(result) {
 return result;
}

const TwoFA = (props) => {
  const classes = useStyles(props)
  const [errorMessage, generateError] = useState('')
  const [errorCount, setErrorCount] = useState(6969)
  const [firstTime, setCheck] = useState(true)

  function generateErrorMessage() {
    setErrorCount(errorCount - 1)
    const message = "Incorrect code. You have " + errorCount + " attempts left."
    generateError(message)
  }

  return (
    <div className={classes.root} id="/twofa">
      <div cardContainer style={{display: "flex", justifyContent:"center", paddingTop: 20}}>
        <Card style={{padding: 25, width: "40%", minWidth:425}}>
          <h4>Two-Factor Authentication</h4>
          <div>Please enter the Two-Factor Authentication code sent to your generated phone number.</div>
          <br />
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Two-Factor Authentication Code</Form.Label>
              <Form.Control type="password" placeholder="Verification Code" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Label>Have you read the terms of service?</Form.Label>
              <Form.Check type="checkbox" label="I have read the terms of service" />
            </Form.Group>
            <h6 style={{color:"#FF9999"}}>{errorMessage}</h6>
              <Button variant="primary" onClick={generateErrorMessage} href={errorCount===0? "/lol" : ""}>
                Verify
              </Button>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default TwoFA