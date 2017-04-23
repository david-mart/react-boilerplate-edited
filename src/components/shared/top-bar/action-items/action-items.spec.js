import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ActionItems from './index';

describe('<ActionItems />', () => {

    it('should have 5 action button', () => {
        
        const wrapper = shallow(<ActionItems />);
        const expected = 5;
        const actual = wrapper.find('IconButton').length;
        expect(actual).equals(expected);

    });


    it('should have avatar container', () => {

        const wrapper = shallow(<ActionItems />);
        const expected = 1;
        const actual = wrapper.find('Avatar').length;
        expect(actual).equals(expected);

    });
});