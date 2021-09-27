import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        bottom:70,
        right: 5,
        position: 'fixed',
      },
    },
    fab: {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    text: {
        textDecoration: 'none'
    }
  }));

export default function FloatingActionButton() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <a href='/matthew-smith-CV-new-cv.pdf' download  className={classes.text}>      
      <Fab variant="extended" className={classes.fab}>
        <GetAppIcon className={classes.extendedIcon} />
        Download CV
      </Fab>
      </a>
    </div>
    )
}
