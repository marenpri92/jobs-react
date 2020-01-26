import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { LOADING, JOBS_SUCCESS, DETAILS_SUCCESS, FAIL } from './types';
import Job from '../../core/models/job';
import { list } from '../../core/data/job.data';
import { AppState } from '../../store';

const loading = () => ({ type: LOADING })

const jobsSuccess = (jobs: Job[]) => ({
    type: JOBS_SUCCESS,
    payload: jobs
})

const detailsSuccess = (job: Job) => ({
    type: DETAILS_SUCCESS,
    payload: job
})

const fail = (error: string) => ({
    type: FAIL,
    payload: error
})

export const jobsShuffle = ():
    ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
        try {
            dispatch(loading());
            const resp = await list();
            dispatch(jobsSuccess(resp));
        } catch (error) {
            dispatch(fail(error));
        }
    }

export const jobsList = ():
    ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
        const state = getState();
        if (state.job.firstLoading) {
            dispatch(jobsShuffle())
        }
    }

export const jobSelected = (job: Job):
    ThunkAction<void, AppState, null, Action<string>> => dispatch => {
        dispatch(detailsSuccess(job))
    }