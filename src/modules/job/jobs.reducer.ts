import { JobState, JobActionTypes, LOADING, JOBS_SUCCESS, DETAILS_SUCCESS, FAIL } from "./types";
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
        default: return state
    }
}

export default job;