import Header from '../assets/header.jpg';

const useStyles = () => ({

  root: {
    borderRadius: 0,
  },
})

const Homepage = (props) => {
  const classes = useStyles(props)

  return (
    <div>
      <img src={Header}className={classes.root}></img>
    </div>
  )
}

export default Homepage