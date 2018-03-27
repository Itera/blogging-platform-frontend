import {
    CATEGORY_ADDED_TO_POST, POST_FORM_VALUE_CHANGED, RELOAD_AUTHORS, RELOAD_CATEGORIES,
    RELOAD_POSTS
} from "../actions";

const defaultState = {
    categories: [],
    authors: [],
    posts: [],
    post: {
        author: '',
        title: '',
        categories: '',
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
        case POST_FORM_VALUE_CHANGED: {
            if (action.data.name === 'existingAuthor') {
                return {...state, post: {...state.post, author: action.data.value}}
            }
            return {...state, post: {...state.post, [action.data.name]: action.data.value}};
        }
        case CATEGORY_ADDED_TO_POST: {
            const existingCategories = state.post.categories;
            return {
                ...state,
                post: {
                    ...state.post,
                    categories: existingCategories ? existingCategories + ', ' + action.data : action.data
                }
            }
        }
    }
    return state;
}