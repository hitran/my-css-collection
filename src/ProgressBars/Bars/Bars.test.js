import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Bars from './Bars';

configure({adapter: new Adapter()});

describe('<Bars/>', () => {
    const setup = (props) => {
        return shallow(<Bars {...props}/>)
    }
    const findByDataAttr = (wrapper, attr) => {
        return wrapper.find(`[data-test="${attr}"]`);
    }

    test('renders bars without data', () => {
        const wrapper = setup({bars:[]})
        const bars = findByDataAttr(wrapper, 'bars');
        expect(bars.length).toBe(0);
    });

    test('renders controls with data', () => {
        const props = {bars: [1, 20, 30], limit:10}
        const wrapper = setup(props)
        const bars = findByDataAttr(wrapper, 'bars');
        expect(bars.length).toBe(3);
        const values = props.bars.map(val => Math.floor((val/props.limit)*100));
        expect(wrapper.text()).toContain(values.join("%"))
    })
})