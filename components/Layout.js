import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Container, Box, Drawer, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';
import PopUp from './PopUp';
import FloatingActionButton from './FloatingActionButton';
import { useEffect, useState } from 'react';

const headersData = [
    {
        label: 'About',
        href: '/'
    },
    {
        label: 'Projects',
        href: '/projects'
    }
]

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
        root: {
            '& .MuiPaper-root': {
                backgroundColor: theme.palette.primary.dark
            }
        },
        drawer: {
            backgroundColor: theme.palette.primary.dark,
            width: '200px',
            paddingTop: '5px'
        },
        drawerText: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.dark
        },
        footer: {
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
    const [mobileView, setMobileView] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const displayDesktop = () => {
        return (
            <Container>
                <Container>
                    <Toolbar className={classes.toolbar}>
                    <div>
                    {headersData.map(({ label, href }) => (
                    <Link href={href} key={label} passHref><Button className={classes.text}>{label}</Button></Link>
                    ))}
                    </div>
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
        )
    }

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => (
            <Link href={href} key={label} passHref><MenuItem className={classes.drawerText}>{label}</MenuItem></Link>
        ));
    };
    
    const displayMobile = () => {

        const handleDrawerOpen = () => {
            setDrawerOpen(true);
        }
        const handleDrawerClose = () => {
            setDrawerOpen(false);
        }

        return (
            <Toolbar style={{paddingLeft: 0}}>
                <IconButton
                  edge="start"
                  style={{
                    color: "inherit",
                    flexGrow: 1,
                    justifyContent: 'left',
                    paddingLeft: '30px'
                  }}
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor='left' open={drawerOpen} className={classes.root} onClose={handleDrawerClose}>
                    <div className={classes.drawer}>{getDrawerChoices()}</div>
                </Drawer>
                <PopUp/>
                <IconButton className={classes.text} href='https://github.commuks80'target='_blank'>
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
        )
    }

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);       
        }

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);
    
    return(
        <div>
            <div>
                <AppBar fixed='true' className={classes.appbar}>
                    {mobileView ? displayMobile() : displayDesktop()}
                </AppBar>
            </div>

            <div className='page-content'>
                <FloatingActionButton/>
                { children }
            </div>
                     
            <Box className={classes.footer}>
                <Container>
                   <Typography variant='body1' className={classes.text}>© Matt Smith 2021</Typography>
                </Container>
            </Box>
        </div>  
    )
}