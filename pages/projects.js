import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { createClient } from 'contentful'
import ProjectCard from '../components/ProjectCard'

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCES_KEY
    })

    const res = await client.getEntries({ content_type: 'project' })

    return {
        props: {projects: res.items},
        revalidate: 1
    }
}

const useStyles = makeStyles((theme) => {
    return {
        toolbar: theme.mixins.toolbar,
        box: {
            margin: '50px'      
        },
        margin: {
            margin: '50px' 
        },
        gridItem: {
            display: 'flex'
        },
        card: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
        },
        text: {
            color: theme.palette.primary.main,
            padding: '5px'
        }  
    }
})

export default function Projects({ projects }) {
    const classes = useStyles()

    return (
        <div> 
            <div>
                <div>
                    <Box className={classes.box}>
                        <Container>
                            <div className={classes.toolbar}></div>
                            <Container>
                                <Typography variant='h3' component='h1' className={classes.text}>Projects</Typography>
                            </Container>
                        </Container>
                    </Box>
                </div>
                <Container className={classes.margin}>
                    <Grid container spacing={4}>
                        {projects.map(project => (
                            <Grid item xs={12} sm={6} md={4} key={project.sys.id}>
                                <ProjectCard project={project}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <div className={classes.toolbar}></div>
            </div>
        </div>
    )
}