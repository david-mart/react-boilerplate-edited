import { DATATABLE_FETCH_ROWS_SUCCESS, DATATABLE_FETCH_ROWS_ERROR, DATATABLE_FETCH_COLUMNS_SUCCESS } from '../constants/action-types';
import axios from 'axios';
import { getRequestUrl, getColumns } from '../utilities/datatable-utilities';

const fetchDatatableRowsSuccess = (data, type) => {
    return {
        type: DATATABLE_FETCH_ROWS_SUCCESS,
        payload: data,
        data_type: type
    };
};

const fetchDatatableRowsError = (error, type) => {
    return {
        type: DATATABLE_FETCH_ROWS_ERROR,
        payload: error,
        data_type: type
    };
};

export const fetchDatatableData = (type) => {
    const url = getRequestUrl(type);
    const request = axios.get(url);
    return dispatch => request.then(
        (data) => dispatch(fetchDatatableRowsSuccess(data, type)),
        (error) => dispatch(fetchDatatableRowsError(error, type)),
    );
};

const fetchColumnsSuccess = (data, type) => {
    return {
        type: DATATABLE_FETCH_COLUMNS_SUCCESS,
        payload: data,
        data_type: type
    };      
};

export const fetchDatatableColumns = (type) => {
    return dispatch => dispatch(fetchColumnsSuccess(getColumns(type), type));  
};