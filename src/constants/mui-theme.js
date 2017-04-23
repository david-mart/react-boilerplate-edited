import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { dotmapsGray, dotmapsBlue, dotmapsLightBlue, overlayTextColor, dotmapsDarkBlue } from './colors';
const muiTheme = getMuiTheme({palette: muiThemePalette});

export const muiThemePalette = {
    textColor: dotmapsGray,
    primary1Color: dotmapsBlue,
    primary2Color: dotmapsLightBlue
};

export default muiTheme;

export const topBarTabsStyles = {
    style: {
        height: '100%',
        width: '16em'
    },
    tabItemContainerStyle: {
        height: '100%',
        background: overlayTextColor
    },
    inkBarStyle: {
        background: dotmapsLightBlue
    },
    tabStyle: {
        textTransform: 'capitalize',
        fontWeight: 500,
        letterSpacing: '0.2px'
    }
};

export const secBarSearchStyles = {
    hintStyle: { color: overlayTextColor },
    hintText: 'Search projects',
    underlineStyle: { borderColor: dotmapsDarkBlue },
    underlineFocusStyle: { borderColor: overlayTextColor },
    style: { color: overlayTextColor, fonSize: '0.8em' }
};