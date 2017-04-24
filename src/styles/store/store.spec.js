import { expect } from "chai";
import { createStore } from "redux";

import rootReducer from '../reducers';

describe("Store", () => {

    it("The store was created successfully", () => {
        const store = createStore(rootReducer, {});
        expect(store).to.exist;  //eslint-disable-line no-unused-expressions
    });
});