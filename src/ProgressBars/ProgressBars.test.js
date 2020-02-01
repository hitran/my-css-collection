import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Bars from './Bars/Bars'
import Controls from './Controls/Controls';
import Loader from '../Loader/Loader';
import ProgressBars from '../ProgressBars/ProgressBars';

configure({adapter: new Adapter()});

describe('<ProgressBars/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProgressBars/>);
    })

    it('should render Bars if loading is false', () => {
        expect(wrapper.find(Bars)).toHaveLength(1);
    });

    it ('should render Control Buttons if loading is false', () => {
        expect(wrapper.find(Controls)).toHaveLength(1);
    });

    it('should not render Loader if loading is false', () => {
        expect(wrapper.find(Loader)).toHaveLength(0);
    });
})