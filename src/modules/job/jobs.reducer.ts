import { JobState, JobActionTypes, LOADING, JOBS_SUCCESS, DETAILS_SUCCESS, FAIL, DELETE } from "./types";
import Job from "../../core/models/job";

const jobStateInitial: JobState = {
    list: [],
    details: {} as Job,
    loading: false,
    error: "",
    firstLoading: true
}

const job = (state = jobStateInitial, action: JobActionTypes) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                firstLoading: false,
                list: action.payload,
            };
        case DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                details: action.payload
            };
        case FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case DELETE:
            return {
                ...state,
                loading: false,
                list: state.list.filter(job => job.id !== action.payload.id)
            };
        default: return state
    }
}

export default job;