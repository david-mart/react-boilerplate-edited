import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';

class ActionItems extends Component {
    render() {
                // fake data
        const avatarUrl = 'http://allrus.me/wp-content/uploads/2013/09/Pavel-Durov-4.jpg';

        return (
            <div>
                <IconButton>
                    <FontIcon className="material-icons">file_upload</FontIcon>
                </IconButton>
                <IconButton>
                    <FontIcon className="material-icons">search</FontIcon>
                </IconButton>
                <IconButton disabled={true}>
                    <FontIcon className="material-icons">notifications</FontIcon>
                </IconButton>
                <IconButton disabled={true}>
                    <FontIcon className="material-icons">work</FontIcon>
                </IconButton>
                <IconButton>
                    <FontIcon className="material-icons">apps</FontIcon>
                </IconButton>

                <Avatar src={avatarUrl} size={30} />
            </div>
        );
    }
}

export default ActionItems;