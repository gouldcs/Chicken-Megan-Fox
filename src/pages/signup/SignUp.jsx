import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import FirstNames from './FirstNames'
import LastNames from './LastNames'
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

const Signup = (props) => {
  const classes = useStyles(props)
  const [phoneNumber, setPhoneNumber] = useState('Generate a number!')

  function generateRandomNumber()  {
  const areaCode = Math.floor(Math.random() * Math.floor(899)) + 100;
  const midNumbers = Math.floor(Math.random() * Math.floor(899)) + 100;
  const lastNumbers = Math.floor(Math.random() * Math.floor(8999)) + 1000;
  const result = "(" + areaCode + ")-" + midNumbers + "-" + lastNumbers;
  setPhoneNumber(result);
}

  return (
    <div className={classes.root} id="/signup">
      <div cardContainer style={{display: "flex", justifyContent:"center", paddingTop: 20}}>
        <Card style={{padding: 25, width: "60%", minWidth: 400}}>
          <div style={{display: "flex", justifyContent: "center", alignSelf:"center", flexDirection: "column", width:"50%", paddingBottom: 15}}>
            <h4 style={{paddingBottom:20}}>Sign Up</h4>
            <FirstNames />
            <br />
            <LastNames />
            <br />
            <Card style={{paddingLeft: 10, paddingRight: 10, paddingTop:5}}>{phoneNumber}</Card>
            <br />
            <Button variant="primary" onClick={generateRandomNumber}>Generate Phone Number</Button>
            <br />
            <Button variant="outline-primary" href={"/twofa"}>Sign Up</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Signup