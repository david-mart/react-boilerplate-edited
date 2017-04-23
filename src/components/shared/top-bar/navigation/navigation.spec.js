import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Navigation from './index';

describe('<Navigation />', () => {

    it('should have Tabs component', () => {
        const expected = 1;
        const wrapper = shallow(<Navigation />);
        const actual = wrapper.find('Tabs').length;
        expect(actual).equals(expected);
    });

    it('should have 3 tabs', () => {
        const expected = 3;
        const wrapper = shallow(<Navigation />);
        const actual = wrapper.find('Tab').length;
        expect(actual).equals(expected);
    });
});