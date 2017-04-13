import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../../actions/project-actions';
import ProjectsTableHead from './projects-table-head';
import ProjectTableBody from './projects-table-body';
import PropTypes from 'prop-types';

class ProjectsTable extends Component {
    componentWillMount() {
        this.props.fetchProjects();
    }

    render() {

        if (this.props.projects.length === 0) {
            return <div> Loading projects... </div>
        }

        return (
            <table>
                <ProjectsTableHead />
                <ProjectTableBody data={this.props.projects} />
            </table>
        );
    }
}

ProjectsTable.propTypes = {
    fetchProjects: PropTypes.func,
    projects: PropTypes.array
};

const mapStateToProps = state => {    
    const { projects } = state;
    return projects;
};

export default connect(mapStateToProps, { fetchProjects })(ProjectsTable);
