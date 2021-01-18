import ProfilePic from '../assets/pfp.JPEG';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from '../assets/header.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

const useStyles = () => ({
  root: {
    minHeight: "100%",
    marginBottom: -50,
  },

  jumbo: {
    borderRadius: 0,
  },
})

const Homepage = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root} id="#home">
      <Jumbotron className={classes.jumbo} style={{backgroundImage: `url(${Header})`, color:"#000000"}}>
        <Container>
            <h1 style={{}}>The Future of Computer Science is Here.</h1>
            <p style={{}}>
              Turn any picture of Megan Fox into a chicken. It's easy, it's simple,
              and it's honestly just really funny.
            </p>
            <p style={{paddingTop:20}}>
              <Container style={{display:"flex", justifyContent:"center"}}>
                <Row style={{width:"60%"}}>
                  <Col style={{paddingBottom:10}}><Button variant="primary">Donate</Button></Col>
                  <Col style={{paddingBottom:10}}><Button variant="primary">Chick-Fil-A</Button></Col>
                  <Col style={{paddingBottom:10}}><Button variant="primary">Hire Me</Button></Col>
                </Row>
              </Container>
            </p>
          </Container>
      </Jumbotron>
    </div>
  )
}

export default Homepage
