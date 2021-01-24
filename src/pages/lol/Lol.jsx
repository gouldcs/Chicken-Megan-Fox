import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

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

const Lol = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root} id="/lol">
      <div cardContainer style={{display: "flex", justifyContent:"center", paddingTop: 20}}>
        <Card style={{padding: 25, width: "40%", minWidth:425}}>
          <h4>Lol.</h4>
          <div>You really thought this site would have a sign up option? And for what?</div>
          <br />
          <Button variant="primary" href="/home">
            Back to Chicken Creation
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default Lol