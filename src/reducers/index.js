import {
    ADD_COMMENT_FORM_VALUE_CHANGED,
    CATEGORY_ADDED_TO_POST, COMMENT_ADDED, ERROR, POST_FORM_VALUE_CHANGED, RELOAD_AUTHORS, RELOAD_CATEGORIES,
    RELOAD_POSTS, VIEW_POST
} from "../actions";

const defaultState = {
    categories: [],
    authors: [],
    posts: [],
    addPost: {
        author: '',
        title: '',
        categories: '',
        perex: '',
        content: ''
    },
    viewPost: {
        author: '',
        title: '',
        categories: [],
        perex: '',
        content: '',
        comments: [],
        addComment: {
            author: '',
            content: ''
        }
    },
    error: null
};

export default (state = defaultState, action) => {
    console.info(action);
    state = {...state, error: null};
    switch (action.type) {
        case RELOAD_POSTS:
        case RELOAD_AUTHORS:
        case RELOAD_CATEGORIES: {
            return {...state, [action.data.name]: action.data.payload}
        }
        case VIEW_POST: {
            return {
                ...state, viewPost: {
                    ...action.data,
                    addComment: {author: '', content: '', postId: action.data.id}
                }
            }
        }
        case POST_FORM_VALUE_CHANGED: {
            if (action.data.name === 'existingAuthor') {
                return {...state, addPost: {...state.addPost, author: action.data.value}}
            }
            return {...state, addPost: {...state.addPost, [action.data.name]: action.data.value}};
        }
        case ADD_COMMENT_FORM_VALUE_CHANGED: {
            return {
                ...state,
                viewPost: {
                    ...state.viewPost,
                    addComment: {...state.viewPost.addComment, [action.data.name]: action.data.value}
                }
            };
        }
        case CATEGORY_ADDED_TO_POST: {
            const existingCategories = state.addPost.categories;
            return {
                ...state,
                addPost: {
                    ...state.addPost,
                    categories: existingCategories ? existingCategories + ', ' + action.data : action.data
                }
            }
        }
        case COMMENT_ADDED: {
            return {
                ...state,
                viewPost: {
                    ...state.viewPost,
                    comments: [...state.viewPost.comments, action.data]
                }
            }
        }
        case ERROR: {
            return {...state, error: action.data}
        }
    }
    return state;
}