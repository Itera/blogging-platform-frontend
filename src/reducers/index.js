import {RELOAD_AUTHORS, RELOAD_CATEGORIES, RELOAD_POSTS} from "../actions";

const defaultState = {
    categories: [],
    authors: [],
    posts: [],
    newPost: {
        author: '',
        title: '',
        categories: [],
        perex: '',
        content: ''
    }
};

export default (state = defaultState, action) => {
    console.info(action);
    switch (action.type) {
        case RELOAD_POSTS:
        case RELOAD_AUTHORS:
        case RELOAD_CATEGORIES: {
            return {...state, [action.data.name]: action.data.payload}
        }
    }
    return state;
}