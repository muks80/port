import React, { useState } from 'react'
import { Button, Grid, TextField, makeStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';


const useStyles = makeStyles((theme) => {
    return {
        root: {
            '& .MuiFormControl-root': {
                margin: theme.spacing(1),
                padding: theme.spacing(0, 1)
            }
        },
        button: {
            margin: theme.spacing(1, 2, 0, 2)
        }
    }
})

const initialValues = {
    firstName: '',
    secondName: '',
    email: '',
    telephone: '',
    message: ''
}

export default function Form(props) {
    const { handleClose } = props
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const classes = useStyles();

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const validate = () => {
        let temp = {}
            temp.firstName = values.firstName ? "" : "First name is required."
            temp.secondName = values.secondName ? "" : "Second name is required."
            temp.email = (/^$|.+@.+..+/).test(values.email) ? "" : "Not a valid email address."
            temp.telephone = values.telephone.length > 10 ? "" : "Mimumum of 11 numbers required"
            temp.message = values.message ? "" : "Message is required."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }

    const sendEmail = e => {
       
        emailjs.sendForm('service_google', 'template_aaea0bi', e.target, 'user_toWRX0iXIoSpJ1IxLQqXh')
            .then((result) => {
                 console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleSubmit = e => {
        e.preventDefault();
        validate();
        if(validate()){
            sendEmail(e);
        }
        handleClose();
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete='off' onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            label='First Name'
                            name='firstName'
                            value={values.firstName}
                            onChange={handleInputChange}
                            error={false}
                            {...(errors.firstName && {error: true, helperText: errors.firstName})}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            label='Second Name'
                            name='secondName'
                            value={values.secondName}
                            onChange={handleInputChange}
                            error={false}
                            {...(errors.secondName && {error: true, helperText: errors.secondName})}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            label='Email Address'
                            name='email'
                            value={values.email}
                            onChange={handleInputChange}
                            error={false}
                            {...(errors.email && {error: true, helperText: errors.email})}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            label='Telephone Number'
                            name='telephone'
                            value={values.telephone}
                            onChange={handleInputChange}
                            error={false}
                            {...(errors.telephone && {error: true, helperText: errors.telephone})}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            label='Message'
                            multiline
                            rows={4}
                            name='message'
                            value={values.message}
                            onChange={handleInputChange}
                            error={false}
                            {...(errors.message && {error: true, helperText: errors.message})}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            type='submit'
                            className={classes.button}
                            endIcon={<SendIcon/>}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
