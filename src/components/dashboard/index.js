import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <ul>
                    <li><Link to="/dashboard/projects">Projects</Link></li>
                    <li>Assets</li>
                    <li>Conflict Groups</li>
                    <li>Collections</li>
                    <li>Events</li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

Dashboard.propTypes = {
    children: PropTypes.element
};

export default Dashboard;
