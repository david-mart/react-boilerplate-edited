import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TopBar from './index';

describe('<TopBar />', () => {

    it('should have menu button', () => {
        const wrapper = shallow(<TopBar />);         
        const expected = 1;
        const actual = wrapper.find('IconButton').length;
        expect(actual).equals(expected);
    });

    it('should have dotMaps logo', () => {
        const wrapper = shallow(<TopBar />);         
        const expected = 1;
        const actual = wrapper.find('Logo').length;
        expect(actual).equals(expected);
    });

    it('should have navigation block', () => {
        const wrapper = shallow(<TopBar />);         
        const expected = 1;
        const actual = wrapper.find('Navigation').length;
        expect(actual).equals(expected);
    });


    it('should have action items block', () => {
        const wrapper = shallow(<TopBar />);
        const expected = 1;
        const actual = wrapper.find('ActionItems').length;
        expect(actual).equals(expected);
    });

});
