import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import HomePage from './index';

describe("<HomePage />", () => {
    it("should have a Home Page heading", () => {
        const expected = "Hello World";

        const wrapper = shallow(<HomePage />);
        const actual = wrapper.find("h1").text();

        expect(actual).to.equal(expected);

    });
});