import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ActionItems from './index';

describe('<ActionItems />', () => {

    it('should have 5 action button', () => {
        
        const wrapper = shallow(<ActionItems />);
        const expected = 6;
        const actual = wrapper.find('IconButton').length;
        expect(actual).equals(expected);

    });
});