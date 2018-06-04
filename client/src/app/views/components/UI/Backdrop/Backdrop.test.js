import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Backdrop from './Backdrop';
configure( {adapter: new Adapter()})

describe('<Backdrop />', () => {
    it('should render exact one div if open props is true', () => {
        const wrapper = shallow(<Backdrop clicked={() => {}}/>)
        wrapper.setProps({
            show: true
        })
        expect(wrapper.find('div')).toHaveLength(1)
    })
})