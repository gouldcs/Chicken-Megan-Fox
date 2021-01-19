import React, { cloneElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
const useStyles = () => ({
  root: {
    
  },
})

const CreatorAbout = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Card.Title style={{display:"flex", justifyContent:"flex-start"}}>About The Creator</Card.Title>
      <Card.Text style={{textAlign:"left"}}>
      My name is Cameron Gould. I am a Computer Science major at Loyola
      Marymount University, with a focus in Artificial Intelligence. I'm
      planning on attending graduate school and possibly a Ph.D. thereafter.
      Although, if I get hired by Tesla or something, then I'll reconsider.
      </Card.Text>
    </div>
  )
}

export default CreatorAbout