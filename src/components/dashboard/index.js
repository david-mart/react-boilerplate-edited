import React, { Component } from 'react';
import { Link } from 'react-router';

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

export default Dashboard;
