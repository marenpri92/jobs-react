import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import JobItem from './JobItem';
import Job from '../../../../core/models/job';
import JobLogo from '../../../shared/jobLogo/JobLogo';

jest.mock('../../../shared/jobLogo/JobLogo', () => {
    return function DummyLogo(props: { url: string, isSmall: boolean }) {
        return (
            <div>
                <div data-test-url='testUrl'>
                    {props.url}
                </div>
                <div data-test-small='testIsSmall'>
                    {props.isSmall ? 'small' : 'large'}
                </div>
            </div>
        );
    };
});

describe('JobItem', () => {
    let table: Element | null = null;
    let container: Element | null = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        table = document.createElement('table');
        container = document.createElement('tbody');
        table.appendChild(container);
        document.body.appendChild(table);
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
        };
        const handlerNavigate = jest.fn();
        act(() => {
            render(<JobItem job={job} handlerNavigate={handlerNavigate} />, container);
        });
        expect(container.querySelector('[data-test-url]').textContent).toBe(job.thumbnail);
        expect(container.querySelector('[data-test-title]').textContent).toBe(job.title);
    });

    it('should render without job data', () => {
        act(() => {
            render(<JobItem />, container);
        });
        expect(container.querySelector('[data-test-url]')).toBeNull();
    });
})
