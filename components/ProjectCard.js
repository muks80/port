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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectCard({ project }) {
  const { title, technologies, thumbnail, description, github, url } = project.fields
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={technologies.join(', ')}
      />
      <CardMedia
        className={classes.media}
        image={`https:${thumbnail.fields.file.url}`}
        title={title}
      />
      <CardContent>
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
          <Typography paragraph >Method:</Typography>
          <Typography paragraph>
            {documentToReactComponents(description)}
          </Typography>
          <Typography paragraph>
            {documentToReactComponents(description)}
          </Typography>
          <Typography paragraph>
            {documentToReactComponents(description)}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}