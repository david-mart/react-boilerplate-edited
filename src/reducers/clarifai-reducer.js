import {
  CLARIFAI_PREDICT_SUCCESS,
  CLARIFAI_PREDICT_ERROR
} from "../constants/action-types";

import { getPredictionErrors } from '../utilities/reducer_utilities';


const initialState = {
  predictions: [],
  errors: []
};

const clarifaiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLARIFAI_PREDICT_SUCCESS:
      return { ...state, predictions: [...state.predictions, ...action.payload.outputs] };
    case CLARIFAI_PREDICT_ERROR:
      return { ...state, errors: [...state.errors, ...getPredictionErrors(action.payload)]};
    default:
      return state;
  }
};

export default clarifaiReducer;