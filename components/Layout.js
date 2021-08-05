import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PopUp from './PopUp';
import FloatingActionButton from './FloatingActionButton';

const useStyles = makeStyles((theme) => {
    return {
        toolbar: {
            justifyContent: 'flex-end'
        },
        appbar: {
            backgroundColor: theme.palette.primary.dark
        },
        text: {
            color: theme.palette.primary.contrastText,
            textDecoration: 'none'
        },
        body: {
            background: theme.palette.primary.dark,
            height: '60px',
            bottom: '0px',
            width: '100%',
            position: 'fixed',
            display: 'flex',
            alignItems: 'center'
        }
    }
})

export default function Layout({children}) {
    const classes = useStyles();
    
    return(
        <div>
            <AppBar fixed='true' className={classes.appbar}>
                <Container>
                    <Container>
                        <Toolbar className={classes.toolbar}>
                            <Link href="/" passHref><Button className={classes.text}>About</Button></Link>
                            <Link href="/projects" passHref><Button className={classes.text}>Projects</Button></Link>
                            <PopUp/>
                            <IconButton className={classes.text} href='https://github.com/muks80' target='_blank'>
                                <Badge>
                                    <GitHubIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton className={classes.text}>
                                <Badge>
                                    <LinkedInIcon/>
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </Container>
                </Container>
            </AppBar>

            <div className='page-content'>
                <FloatingActionButton/>
                { children }
            </div>
                     
            <Box className={classes.body}>
                <Container>
                   <Typography variant='body1' className={classes.text}>© Matt Smith 2021</Typography>
                </Container>
            </Box>
        </div>  
    )
}