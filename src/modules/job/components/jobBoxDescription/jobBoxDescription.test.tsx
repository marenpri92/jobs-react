import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import JobBoxDescription from './JobBoxDescription';

describe('JobBoxDescription', () => {
    let container: Element | null = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        // cleanup on exiting
        if (container) {
            unmountComponentAtNode(container);
            container.remove();
        }
        container = null;
    });
    
    it('should render with description', () => {
        act(() => {
            render(<JobBoxDescription description="Job description" />, container);
        });
        expect(container.querySelector('[data-testid]').textContent).toBe('Job description');
    });

    it('should render without description', () => {
        act(() => {
            render(<JobBoxDescription />, container);
        });
        expect(container.querySelector('[data-testid]').textContent).toBe('');
    });
})
