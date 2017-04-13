// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import projectsReducer from './projects-reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    projects: projectsReducer
});

export default rootReducer;