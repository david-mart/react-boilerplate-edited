import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class TopBar extends Component {
    render() {
        return (
            <AppBar
                title="dotMaps"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}

export default TopBar;