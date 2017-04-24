export const getPredictionErrors = (prediction) => {
    return prediction.outputs ? prediction.outputs : [prediction.status];
};