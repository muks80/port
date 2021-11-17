import  { createTheme } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[700]
        }
    },
    typography: {
        fontFamily: [
            'Lano',
            'sans-serif'
        ].join(',')
    }
});

export default theme;