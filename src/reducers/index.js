// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import datatablesReducer from './datatable-reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    dataTables: datatablesReducer
});

export default rootReducer;