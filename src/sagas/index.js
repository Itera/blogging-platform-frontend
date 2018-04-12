import {call, all, put, takeEvery, fork} from 'redux-saga/effects';
import {router, createHashHistory} from 'redux-saga-router';

import Api from '../api';
import {
    ERROR,
    RELOAD_POSTS,
    RELOAD_AUTHORS,
    RELOAD_CATEGORIES,
    POST_SAVE,
    VIEW_POST,
    EDIT_POST,
    APPLICATION_LOADED,
    SAVE_COMMENT,
    COMMENT_ADDED,
    DELETE_AUTHOR,
    DELETE_CATEGORY,
    DELETE_POST, POST_UPDATE
} from "../actions";

const history = createHashHistory();

const fetchPostsByCategorySaga = function* fetchPostsByCategory({id}) {
    try {
        const posts = yield call(Api.fetchPostsByCategory, id);
        yield put({type: RELOAD_POSTS, data: {name: 'posts', payload: posts}});
    } catch (e) {
        yield put({type: ERROR, data: e.message});
    }
};

const fetchPostsByAuthorSaga = function* fetchPostsByAuthor({id}) {
    try {
        const posts = yield call(Api.fetchPostsByAuthor, id);
        yield put({type: RELOAD_POSTS, data: {name: 'posts', payload: posts}});
    } catch (e) {
        yield put({type: ERROR, data: e.message});
    }
};

const fetchPostsSaga = function* fetchPosts() {
    try {
        const posts = yield call(Api.fetchPosts);
        yield put({type: RELOAD_POSTS, data: {name: 'posts', payload: posts}});
    } catch (e) {
        yield put({type: ERROR, data: e.message});
    }
};
const routes = {
    '/': fetchPostsSaga,
    '/admin': fetchPostsSaga,
    '/view-category/:id': fetchPostsByCategorySaga,
    '/view-author/:id': fetchPostsByAuthorSaga,
    '/view-post/:id': function* viewPostSaga({id}) {
        try {
            const [post, comments] = yield all([
                call(Api.fetchPost, id),
                call(Api.fetchCommentsForPost, id)
            ]);
            yield put({type: VIEW_POST, data: {...post, comments}});
        } catch (e) {
            yield put({type: ERROR, data: e.message});
        }
    },
    '/edit-post/:id': function* editPostSaga({id}) {
        try {
            const post = yield call(Api.fetchPost, id);
            yield put({type: EDIT_POST, data: post});
        } catch (e) {
            yield put({type: ERROR, data: e.message});
        }
    }
};

function* fetchMainPageData() {
    try {
        const [categories, authors] = yield all([
            call(Api.fetchCategories),
            call(Api.fetchAuthors),
        ]);
        yield put({type: RELOAD_AUTHORS, data: {name: 'authors', payload: authors}});
        yield put({type: RELOAD_CATEGORIES, data: {name: 'categories', payload: categories}});
    } catch (e) {
        yield put({type: ERROR, data: e.message});
    }
}

function* savePost(action) {
    try {
        yield call(Api.savePost, action.data);
        history.push('/');
    } catch (e) {
        yield put({type: ERROR, data: e.message});
    }
}

function* updatePost(action) {
    try {
        yield call(Api.updatePost, action.data);
        history.push('/');
    } catch (e) {
        yield put({type: ERROR, data: e.message});
    }
}

function* saveComment(action) {
    try {
        const savedComment = yield call(Api.saveComment, action.data);
        yield put({type: COMMENT_ADDED, data: savedComment});
    } catch (e) {
        yield put({type: ERROR, data: e.message});
    }
}

function* deleteItem(action) {
    try {
        switch (action.type) {
            case DELETE_AUTHOR: {
                yield call(Api.deleteAuthor, action.data);
                yield call(fetchMainPageData);
                break;
            }
            case DELETE_CATEGORY: {
                yield call(Api.deleteCategory, action.data);
                yield call(fetchMainPageData);
                break;
            }
            case DELETE_POST: {
                yield call(Api.deletePost, action.data);
                yield call(fetchPostsSaga);
                break;
            }
            default:
                yield put({type: ERROR, data: `Deletion not implemented for ${action.type}`});
        }
    } catch (e) {
        yield put({type: ERROR, data: e.message});
    }
}

function* mainSaga() {
    yield takeEvery(POST_SAVE, savePost);
    yield takeEvery(POST_UPDATE, updatePost);
    yield takeEvery(SAVE_COMMENT, saveComment);
    yield takeEvery(APPLICATION_LOADED, fetchMainPageData);
    yield takeEvery(DELETE_CATEGORY, deleteItem);
    yield takeEvery(DELETE_AUTHOR, deleteItem);
    yield takeEvery(DELETE_POST, deleteItem);
    yield fork(router, history, routes);
}

export default mainSaga;