import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import Form from './Form';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogText: {
        color: theme.palette.primary.main,
        paddingLeft: theme.spacing(5),
        margin: theme.spacing(0.1)
    },
    dialogTitle: {
        padding: theme.spacing(0.2)
    },
    text: {
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
    }
}))

export default function PopUp() {
    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false);

    const handleClickOpen = () => {
        setOpenPopup(true);
      };
    
      const handleClose = () => {
        setOpenPopup(false);
      };

    return (
        <>
        <Button className={classes.text} onClick={handleClickOpen}>
            Contact
        </Button>
        <Dialog open={openPopup} onClose={handleClose} maxWidth='md' classes={{paper: classes.dialogWrapper}}>
            <DialogTitle className={classes.dialogTitle}>
                <div className={classes.dialogText}>Contact Form</div>
            </DialogTitle>
            <DialogContent className={classes.dialogTitle}>
                <p className={classes.dialogText}>For any queries please complete the below form and I will get back <br />to you as soon as possible.</p>
            </DialogContent>
            <DialogContent>
                <Form handleClose={handleClose}/>
            </DialogContent>
        </Dialog>
        </>
    )
}
