import { ClarifaiUtility } from "../utilities/clarifai";
import {
  CLARIFAI_PREDICT_SUCCESS,
  CLARIFAI_PREDICT_ERROR
} from "../constants/action-types";

const predictClarifaiSuccess = data => {
  return {
    type: CLARIFAI_PREDICT_SUCCESS,
    payload: data
  };
};

const predictClarifaiError = error => {
  return {
    type: CLARIFAI_PREDICT_ERROR,
    payload: error
  };
};

export const predictClarifai = term => {
  const utility = new ClarifaiUtility();
  return (dispatch) => utility.predict(term).then(
    data => dispatch(predictClarifaiSuccess(data)),
    error => dispatch(predictClarifaiError(error))
  );
};
