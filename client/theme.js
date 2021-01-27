import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#c4a2f9',
      main: '#3c3049',
      dark: '#3c3049',
      contrastText: '#fff',
    },
    secondary: {
      light: '#838bc5',
      main: '#544473',
      dark: '#3c3049',
      contrastText: '#000',
    },
    openTitle: '#544473',
    protectedTitle: '#3c3049',
    type: 'light'
  }
})

export default theme  