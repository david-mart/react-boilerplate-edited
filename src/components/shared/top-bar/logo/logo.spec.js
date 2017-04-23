import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Logo from './index';

describe('<Logo />', () => {
    it('should have read "dotmaps" text', () => {
        const expected = 'dotmaps';
        const wrapper = shallow(<Logo />);
        const actual = wrapper.text();

        expect(actual).equals(expected);
    });
});