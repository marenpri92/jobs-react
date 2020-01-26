import Job from '../../core/models/job';

/**
 * Jobs store interfaces
 */
export interface JobState {
    list: Job[],
    details: Job,
    loading: boolean,
    error: string,
    firstLoading: boolean
}

export const LOADING = 'LOADING';
export const JOBS_SUCCESS = 'JOBS_SUCCESS';
export const DETAILS_SUCCESS = 'DETAILS_SUCCESS';
export const FAIL = 'FAIL';
export const DELETE = 'DELETE';

interface Loading {
    type: typeof LOADING
}

interface JobsSuccess {
    type: typeof JOBS_SUCCESS,
    payload: Job[]
}

interface DetailsSuccess {
    type: typeof DETAILS_SUCCESS,
    payload: Job
}

interface Fail {
    type: typeof FAIL,
    payload: string
}

interface Delete {
    type: typeof DELETE,
    payload: Job
}

export type JobActionTypes = Loading | JobsSuccess | DetailsSuccess | Fail | Delete;