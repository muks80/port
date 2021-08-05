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
          <Typography variant='h3' className={classes.text}>Matt Smith Web Developer</Typography>
          <Typography variant='body1' className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit dolore, corporis cum ex rerum iure! Porro natus possimus sit temporibus eaque, nisi id ducimus iste optio quae minima vitae!</Typography>
        </Container>
      </Container>
    </Box>
  )
}
