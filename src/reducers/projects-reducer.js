import { FETCH_PROJECTS_SUCCESS } from '../constants/action-types';

const initState = {
    projects: []
};

const projectsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PROJECTS_SUCCESS:
            return { ...state, projects: action.payload.results };
        default:
            return state;
    }
};

export default projectsReducer;
