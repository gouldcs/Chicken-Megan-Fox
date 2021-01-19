import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
const useStyles = () => ({
  root: {
    
  },
})

const ProjectAbout = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Card.Title style={{display:"flex", justifyContent:"flex-start"}}>About The Project</Card.Title>
      <Card.Text style={{textAlign:"left"}}>
        'I created this website as a small project to practice Tensorflow.
        I didn't really know what to do for a project, so I started typing
        a random name for the project and ended up with "Chicken Megan Fox."
        Originally, I was going to recreate my personal website using react
        bootstrap instead of Material-UI. So much so that the name of the project
        file in my repo is "goulcs-webapp"... yep, even a typo in it. Yikes.'
      </Card.Text>
    </div>
  )
}

export default ProjectAbout
