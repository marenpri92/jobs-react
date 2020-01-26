import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import JobBoxDetails from './JobBoxDetails';
import Job from '../../../../core/models/job';
import moment from 'moment';

describe('JobBoxDetails', () => {
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

    it('should render with job data', () => {
        const job: Job = {
            id: '123',
            title: 'My title',
            city: 'Mi city',
            thumbnail: 'img',
            description: 'My description',
            state: 'active',
            created_at: new Date(),
            end_date: new Date(),
            counter: {
                messages_total: 1,
                messages_unread: 2
            },
        }
        act(() => {
            render(<JobBoxDetails job={job} />, container);
        });
        expect(container.querySelector('[data-test-msg]').textContent).toBe(job.counter.messages_unread.toString());
        expect(container.querySelector('[data-test-state]').textContent).toBe(job.state);
        expect(container.querySelector('[data-test-create]').textContent).toBe(moment(job.created_at, 'YYYY-MM-DD').format('DD.MM.YYYY'));
        expect(container.querySelector('[data-test-expire]').textContent).toBe(moment(job.end_date, 'YYYY-MM-DD').format('DD.MM.YYYY'));
    });

    it('should render without job data', () => {
        act(() => {
            render(<JobBoxDetails />, container);
        });
        expect(container.querySelector('[data-test-msg]')).toBe(null);
    });
})
