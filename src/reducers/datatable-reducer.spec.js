import { expect } from "chai";
import {
  DATATABLE_FETCH_ROWS_SUCCESS,
  DATATABLE_FETCH_ROWS_ERROR,
  DATATABLE_FETCH_COLUMNS_SUCCESS
} from "../constants/action-types";
import reducer from "./datatable-reducer";

describe("Reducer - DataTable", () => {
  const getInitState = () => {
    return {
      rows: {
        zigerions: [{ id: 0, name: "Prince Nebulon" }]
      },
      filters: {},
      columns: {
        zigerions: [{ label: "Race", key: "race" }]
      },
      errors: []
    };
  };

  it("should set initial state by default", () => {
    const action = {
      type: "UNKNOWN"
    };
    const expected = getInitState();
    const actual = reducer(getInitState(), action);

    expect(actual).deep.equals(expected);
  });

  describe("when DATATABLE_FETCH_ROWS_SUCCESS action is dispatched", () => {
    it("should create new attribute with key of `data_type` in `data` state if doesn't exist", () => {
      const action = {
        type: DATATABLE_FETCH_ROWS_SUCCESS,
        payload: successRowsResponse,
        data_type: "plutonians"
      };

      const expected = "plutonians";
      const actual = reducer(getInitState(), action).rows;

      expect(actual).to.have.property(expected);
    });

    it("should populate the data type attribute of `data` state with response resulats", () => {
      const action = {
        type: DATATABLE_FETCH_ROWS_SUCCESS,
        payload: successRowsResponse,
        data_type: "plutonians"
      };

      const expected = {
        rows: {
          zigerions: [{ id: 0, name: "Prince Nebulon" }],
          plutonians: [
            { id: 0, name: "King Flippy Nips" },
            { id: 1, name: "Scroopy Noopers" }
          ]
        },
        filters: {},
        columns: {
          zigerions: [{ label: "Race", key: "race" }]
        },
        errors: []
      };

      const actual = reducer(getInitState(), action);

      expect(actual).deep.equals(expected);
    });
  });

  describe("when DATATABLE_FETCH_ROWS_ERROR action is dispatched", () => {
    it("should add the error message to `errors` state array", () => {
      const action = {
        type: DATATABLE_FETCH_ROWS_ERROR,
        payload: errorRowsResponse
      };

      const actual = reducer(getInitState(), action).errors;
      const expected = {
        message: "error"
      };
      expect(actual).to.include(expected);
    });
  });

  describe("when DATATABLE_FETCH_COLUMNS_SUCCESS action is dispatched", () => {
    it("should create new attribute with key of `data_type` in `columns` state if doesn't exist", () => {
      const action = {
        type: DATATABLE_FETCH_COLUMNS_SUCCESS,
        payload: successRowsResponse,
        data_type: "plutonians"
      };

      const expected = "plutonians";
      const actual = reducer(getInitState(), action).columns;

      expect(actual).to.have.property(expected);
    });

    it("should populate the data type attribute of `columns` state with response results", () => {
      const action = {
        type: DATATABLE_FETCH_COLUMNS_SUCCESS,
        payload: successColumnsResponse,
        data_type: "plutonians"
      };

      const expected = {
        rows: {
          zigerions: [{ id: 0, name: "Prince Nebulon" }]
        },
        filters: {},
        columns: {
          zigerions: [{ label: "Race", key: "race" }],
          plutonians: [
            { label: "Species", key: "species", visible: true },
            { label: "Name", key: "name", visible: false },
            { label: "Origin", key: "origin", visible: true }
          ]
        },
        errors: []
      };

      const actual = reducer(getInitState(), action);

      expect(actual).deep.equals(expected);
    });
  });
});

const successRowsResponse = {
  data: {
    count: 2,
    results: [
      { id: 0, name: "King Flippy Nips" },
      { id: 1, name: "Scroopy Noopers" }
    ]
  }
};

const errorRowsResponse = {
  message: "error"
};

const successColumnsResponse = [
  { label: "Species", key: "species", visible: true },
  { label: "Name", key: "name", visible: false },
  { label: "Origin", key: "origin", visible: true }
];
