import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Dashboard from './index';

describe("<Dashboard />", () => {
  it('should contain a root component with a class of "dashboard-content"', () => {
    
    const expected = 1;
    const wrapper = shallow(<Dashboard />);
    const actual = wrapper.find('.dashboard-container').length;

    expect(actual).equals(expected);

  });
});