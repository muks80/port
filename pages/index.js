import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {

      box: {
        padding: '300px 100px 500px 100px',
        backgroundColor: theme.palette.primary.dark
      },
      typingDemo: {
        width: '42ch',
        animation: '$typing 4s steps(37), $blink .5s step-end infinite alternate',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        borderRight: '3px solid',
        color: 'white',
        fontSize: '2em'
      },
      '@keyframes typing': {
        'from': {
          width: 0
        }
      },
      '@keyframes blink': {
        '50%': {
          borderColor: 'transparent'
        }
      },
      text: {
        color: 'white',
        padding: '5px'
      }
    }
  })

export default function Home() {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Container>
        <Container>
          <div className={classes.typingDemo}>
            <Typography variant='h3' className={classes.text}>Matt Smith Web Developer...</Typography>
          </div>
          <Typography variant='body1' className={classes.text}>Junior web developer specialising in HTML, CSS, JavaScript and TypeScript
                      as well as a range of front end frameworks including REACT, Next.js, Material-UI, Semantic-UI and Materialize.
          </Typography>
        </Container>
      </Container>
    </Box>
  )
}
