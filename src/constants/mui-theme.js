import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { greenA400, greenA700 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: greenA400,
    primary2Color: greenA700,
  }
});

export default muiTheme;