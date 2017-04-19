import React, { Component } from 'react';
// import { Link } from 'react-router';

import { List, ListItem } from 'material-ui/List';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import PropTypes from 'prop-types';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <List>
                    <ListItem primaryText="Projects" leftIcon={<ContentAddCircle />} />
                    <ListItem primaryText="Assets"/>
                    <ListItem primaryText="Conflict Groups"/>
                    <ListItem primaryText="Collections"/>
                    <ListItem primaryText="Events"/>
                </List>
                {this.props.children}
            </div>
        );
    }
}

Dashboard.propTypes = {
    children: PropTypes.element
};

export default Dashboard;
