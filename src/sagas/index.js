import {call, all, put, takeEvery} from 'redux-saga/effects'
import Api from '../api';
import {APPLICATION_STARTED, ERROR, RELOAD_POSTS, RELOAD_AUTHORS, RELOAD_CATEGORIES, RELOAD_PERIODS} from "../actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPosts() {
    try {
        const [posts, categories, period, authors] = yield all([
            call(Api.fetchPosts),
            call(Api.fetchCategories),
            call(Api.fetchPeriod),
            call(Api.fetchAuthors),
        ]);
        yield put({type: RELOAD_POSTS, data: {name: 'posts', payload: posts}});
        yield put({type: RELOAD_AUTHORS, data: {name: 'authors', payload: authors}});
        yield put({type: RELOAD_CATEGORIES, data: {name: 'categories', payload: categories}});
        yield put({type: RELOAD_PERIODS, data: {name: 'period', payload: period}});
    } catch (e) {
        yield put({type: ERROR, message: e.message});
    }
}

function* mySaga() {
    yield takeEvery(APPLICATION_STARTED, fetchPosts);
}

export default mySaga;