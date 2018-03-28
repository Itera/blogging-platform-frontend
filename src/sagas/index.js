import {call, all, put, takeEvery} from 'redux-saga/effects';
import Api from '../api';
import {APPLICATION_STARTED, ERROR, RELOAD_POSTS, RELOAD_AUTHORS, RELOAD_CATEGORIES, POST_SAVE} from "../actions";

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

function* savePost(action) {
    try {
        yield call(Api.savePost, action.data);
    } catch (e) {
        yield put({type: ERROR, message: e.message});
    }
}

function* mySaga() {
    yield takeEvery(APPLICATION_STARTED, fetchInitialData);
    yield takeEvery(POST_SAVE, savePost)
}

export default mySaga;