import React from 'react';
import PropTypes from 'prop-types';

const ProjectTableBody = ({data}) => {
    return (
        <tbody>
            {data.map(proj => {
                return (
                    <tr key={proj.id}>
                        <td>{proj.id}</td>
                        <td>{proj.name}</td>
                        <td>{proj.agency}</td>
                        <td>{proj.type}</td>
                        <td>{proj.start_date}</td>
                        <td>{proj.end_date}</td>
                        <td>{proj.description.slice(0, 50)}</td>
                    </tr>
                );
            })}
        </tbody>
    );
};

ProjectTableBody.propTypes = {
    data: PropTypes.array
};

export default ProjectTableBody;