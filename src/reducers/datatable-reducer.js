import {
  DATATABLE_FETCH_ROWS_SUCCESS,
  DATATABLE_FETCH_ROWS_ERROR,
  DATATABLE_FETCH_COLUMNS_SUCCESS
} from "../constants/action-types";

const initialState = {
  rows: {},
  filters: {},
  columns: {},
  errors: []
};

const datatableReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATATABLE_FETCH_ROWS_SUCCESS: {
      const rows = { ...state.rows };
      rows[action.data_type] = action.payload.data.results;
      return { ...state, rows };
    }
    case DATATABLE_FETCH_ROWS_ERROR:
      return { ...state, errors: [...state.errors, action.payload] };
    case DATATABLE_FETCH_COLUMNS_SUCCESS: {
      const columns = { ...state.columns };
      columns[action.data_type] = action.payload;
      return { ...state, columns };
    }
    default:
      return state;
  }
};

export default datatableReducer;
