import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Bars from './Bars';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders without bar values", () => {
    act(() => {
      render(<Bars bars={[]}/>, container);
    });
    expect(container.textContent).toBe("");
});

it("renders with limit and bar values", () => {
    act(() => {
        render(<Bars bars={[1]} limit={10}/>, container);
        expect(container.textContent).toBe("10%")
    })
})

