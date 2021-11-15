import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 570,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function ProjectCard({ project }) {
  const { title, technologies, thumbnail, description, details, github, url } = project.fields
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState({elevated: false, shadow: 1});

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box 
      component={Card}
      className={classes.root}
      onMouseOver={() => setHover({elevated: true, shadow: 5})}
      onMouseOut={() => setHover({elevated: false, shadow: 2})}
      boxShadow={hover.shadow}
    >
      <CardHeader
        title={title}
        subheader={`Technolgies used: ${technologies.join(', ')}`}
      />
      <CardMedia
        className={classes.media}
        image={`https:${thumbnail.fields.file.url}`}
        title={title}
        component={Link}
        href={url}
      />
      <CardContent style={{paddingBottom: 0}}>
        <Typography variant="body2" color="textSecondary" component="span">
            {documentToReactComponents(description)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link to website" href={url} target='_blank'>
          <LinkIcon/>
        </IconButton>
        <IconButton aria-label="github" href={github} target='_blank'>
          <GitHubIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="span">Description:</Typography>
          <Typography variant="body2" color="textSecondary" component="span">
          {documentToReactComponents(details)}
          </Typography>
        </CardContent>
      </Collapse>
    </Box>
  );
}