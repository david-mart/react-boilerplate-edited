// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import clarifaiReducer from './clarifai-reducer';

const rootReducer = combineReducers({
    clarifai: clarifaiReducer,
    routing: routerReducer
});

export default rootReducer;