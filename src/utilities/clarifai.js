import Clarifai from "clarifai";

let instance = null;

export class ClarifaiUtility {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this.app = new Clarifai.App(
      "api_key",
      "secret"
    );

    return instance;
  }

  predict(imageUrl) {
    return this.app.models.predict(
      Clarifai.GENERAL_MODEL,
      imageUrl
    );
  }
}
