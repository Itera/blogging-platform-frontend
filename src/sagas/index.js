import {call, all, put, takeEvery, fork} from 'redux-saga/effects';
import {router, createHashHistory} from 'redux-saga-router';

import Api from '../api';
import {
    ERROR,
    RELOAD_POSTS,
    RELOAD_AUTHORS,
    RELOAD_CATEGORIES,
    POST_SAVE,
    VIEW_POST
} from "../actions";

const history = createHashHistory();

const routes = {
    '/': function* fetchMainPageData() {
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
    },
    '/view-post/:id': function* viewPostSaga({id}) {
        try {
            const post = yield call(Api.fetchPost, id);
            yield put({type: VIEW_POST, data: post});
        } catch (e) {
            yield put({type: ERROR, message: e.message});
        }
    }
};

function* savePost(action) {
    try {
        yield call(Api.savePost, action.data);
    } catch (e) {
        yield put({type: ERROR, message: e.message});
    }
}

function* mainSaga() {
    yield takeEvery(POST_SAVE, savePost);
    yield fork(router, history, routes);
}

export default mainSaga;