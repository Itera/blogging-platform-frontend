import {RELOAD_AUTHORS, RELOAD_CATEGORIES, RELOAD_PERIODS, RELOAD_POSTS} from "../actions";

const defaultState = {
    categories: [],
    period: [],
    authors: [],
    posts: []
};

export default (state = defaultState, action) => {
    console.info(action);
    switch (action.type) {
        case RELOAD_POSTS:
        case RELOAD_AUTHORS:
        case RELOAD_CATEGORIES:
        case RELOAD_PERIODS: {
            return {...state, [action.data.name]: action.data.payload}
        }
    }
    return state;
}