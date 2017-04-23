import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { overlayTextColor } from '../../../../constants/colors';

class ActionItems extends Component {
    render() {

        return (
            <div>
                <IconButton>
                    <FontIcon className="material-icons" color={overlayTextColor}>info</FontIcon>
                </IconButton>
                <IconButton>
                    <FontIcon className="material-icons" color={overlayTextColor}>view_module</FontIcon>
                </IconButton>
                <IconButton>
                    <FontIcon className="material-icons" color={overlayTextColor}>filter_list</FontIcon>
                </IconButton>
                <IconButton>
                    <FontIcon className="material-icons" color={overlayTextColor}>print</FontIcon>
                </IconButton>
                <IconButton>
                    <FontIcon className="material-icons" color={overlayTextColor}>file_download</FontIcon>
                </IconButton>
                <IconButton>
                    <FontIcon className="material-icons" color={overlayTextColor}>more_horiz</FontIcon>
                </IconButton>
            </div>
        );
    }
}

export default ActionItems;