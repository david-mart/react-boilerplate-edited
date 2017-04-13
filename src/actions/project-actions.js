import axios from 'axios';
import { PROJECT_ENDPOINT } from '../constants/endpoints';
import { FETCH_PROJECTS_SUCCESS } from '../constants/action-types';

export const fetchProjectsSuccess = (data) => {
    return {
        type: FETCH_PROJECTS_SUCCESS,
        payload: data
    };
};
export const fetchProjects = () => {
    const request = axios.get(PROJECT_ENDPOINT);
    
    return (dispatch) => {
        request.then(({ data }) => {            
            dispatch(fetchProjectsSuccess(data));
        });
    };
};
