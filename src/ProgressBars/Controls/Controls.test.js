import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Controls from './Controls';

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

it("renders without buttons values", () => {
    act(() => {
      render(<Controls buttons={[]}/>, container);
    });
    expect(container.textContent).toBe("");
});

it("renders with limit and buttons", () => {
    act(() => {
        render(<Controls total={1} buttons={[10, 12, -10]} limit={10}/>, container);
        expect(container.textContent).toBe("# Progress 11012-10")
    })
})

