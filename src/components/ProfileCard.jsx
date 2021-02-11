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
    <div className={classes.root} id="/home">
      <Jumbotron className={classes.jumbo} style={{backgroundImage: `url(${Header})`, color:"#000000"}}>
        <Container>
            <h1 style={{}}>The Future of Computer Science is Here.</h1>
            <p style={{}}>
              Turn any picture of Megan Fox into a chicken. It's easy, it's simple,
              and it's honestly just really funny.
            </p>
            <p style={{paddingTop:20}}>
              <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{display:"flex", flexDirection: "row", justifyContent:"space-between", width:"40%", minWidth:225}}>
                  <div style={{display:"flex", flexDirection:"column", paddingRight: 5}}>
                    <Button variant="primary" href='https://cash.app/$KingCammyG'>Donate</Button>
                  </div>
                  <div style={{display:"flex", flexDirection:"column"}}>
                    <Button variant="outline-primary" href='https://www.chick-fil-a.com/'>Chick-Fil-A</Button>
                  </div>
                </div>
              </div>
            </p>
          </Container>
      </Jumbotron>
    </div>
  )
}

export default Homepage
