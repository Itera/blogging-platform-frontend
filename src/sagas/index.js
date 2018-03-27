import {call, all, put, takeEvery} from 'redux-saga/effects'
import Api from '../api';
import {APPLICATION_STARTED, ERROR, RELOAD_POSTS, RELOAD_AUTHORS, RELOAD_CATEGORIES} from "../actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchInitialData() {
    try {
        const [posts, categories, authors] = yield all([
            call(Api.fetchPosts),
            call(Api.fetchCategories),
            call(Api.fetchAuthors),
        ]);
        yield put({type: RELOAD_POSTS, data: {name: 'posts', payload: posts}});
        yield put({type: RELOAD_AUTHORS, data: {name: 'authors', payload: authors}});
        yield put({type: RELOAD_CATEGORIES, data: {name: 'categories', payload: categories}});
    } catch (e) {
        yield put({type: ERROR, message: e.message});
    }
}

function* mySaga() {
    yield takeEvery(APPLICATION_STARTED, fetchInitialData);
}

export default mySaga;