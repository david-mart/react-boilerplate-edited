import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import HomePage from './HomePage';

describe("<HomePage />", () => {
    it("should have a HomePage heading", () => {
        const expected = "dotMaps";

        const wrapper = shallow(<HomePage />);
        const actual = wrapper.find("h1").text();

        expect(actual).to.equal(expected);

    });
});