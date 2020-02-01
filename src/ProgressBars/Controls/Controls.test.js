import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Controls from './Controls';

configure({adapter: new Adapter()});

describe('<Controls/>', () => {
    const setup = (props) => {
        return shallow(<Controls {...props}/>)
    }
    const findByDataAttr = (wrapper, attr) => {
        return wrapper.find(`[data-test="${attr}"]`);
    }

    test('renders controls without data', () => {
        const wrapper = setup({buttons: [], total: 0})
        const controlButtons = findByDataAttr(wrapper, 'control-button');
        const selectOption = findByDataAttr(wrapper, 'select-option');
        expect(controlButtons.length).toBe(0);
        expect(selectOption.length).toBe(0);
    });

    test('renders controls with data', () => {
        const props = {total:2, buttons:[10, 12, -10], limit:10}
        const wrapper = setup(props)
        const controlButtons = findByDataAttr(wrapper, 'control-button');
        const selectOption = findByDataAttr(wrapper, 'select-option');
        expect(controlButtons.length).toBe(3);
        expect(selectOption.length).toBe(2);
        expect(wrapper.text()).toContain(props.buttons.join(""))
    })
})