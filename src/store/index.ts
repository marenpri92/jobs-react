import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import history from './utils/history';
import job from '../modules/job/jobs.reducer';

const reducers = combineReducers({
    job,
    router: connectRouter(history)
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk)
);

export type AppState = ReturnType<typeof reducers>;

const store = createStore(
    reducers,
    enhancer
);

export default store;