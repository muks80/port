import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
      toolbar: theme.mixins.toolbar,
      box: {
        margin: '50px',
      },
      text: {
        color: theme.palette.primary.light,
        padding: '5px'
      }
    }
  })

export default function Home() {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Container>
        <div className={classes.toolbar}></div>
        <Container >
          <Typography variant='h3' className={classes.text}>Matt Marriott Web Developer</Typography>
          <Typography variant='body1' className={classes.text}>Self taught web developer specialising in HTML, CSS and JavaScript 
                      as well as a range of front end frameworks including REACT, Next.js, Material-UI, Semantic-UI and Materialize.
          </Typography>
        </Container>
      </Container>
    </Box>
  )
}
