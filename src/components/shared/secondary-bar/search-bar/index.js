import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './search-bar.scss';
import FontIcon from 'material-ui/FontIcon';
import {overlayTextColor} from '../../../../constants/colors';
import TextField from 'material-ui/TextField';
import { secBarSearchStyles } from '../../../../constants/mui-theme';

class SearchBar extends Component {

    render() {
        const styles = secBarSearchStyles;
        return (
            <div styleName="secondary-bar-search-container">
                <FontIcon className="material-icons" color={overlayTextColor}>search</FontIcon>
                <div className="flex-grow">
                    <TextField
                        fullWidth={true}
                        hintText={styles.hintText}
                        hintStyle={styles.hintStyle}
                        inputStyle={styles.style}
                        underlineStyle={styles.underlineStyle}
                        underlineFocusStyle={styles.underlineFocusStyle}/>
                </div>
            </div>
        );
    }
}

export default CSSModules(SearchBar, styles);