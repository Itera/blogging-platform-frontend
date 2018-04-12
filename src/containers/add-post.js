import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {CATEGORY_ADDED_TO_POST, POST_SAVE, ADD_POST_FORM_VALUE_CHANGED, ERROR} from "../actions";
import AddPost from '../components/add-post';
import {Post} from '../model';

const onCategoryAdded = (category) => ({type: CATEGORY_ADDED_TO_POST, data: category});
const onPostSave = (post, authors, categories) => {
    let postValidationErrors = Post.validate(post);
    console.log(post);
    if (postValidationErrors.length === 0) {
        return {type: POST_SAVE, data: Post.transformForBackend(post, authors, categories)};
    }
    return {
        type: ERROR,
        data: {type: 'Validation', message: `Error in field validation of Post. Errors: ${postValidationErrors}`}
    }
};
const onValueChanged = (event) => ({
    type: ADD_POST_FORM_VALUE_CHANGED,
    data: {name: event.target.name, value: event.target.value}
});

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        authors: state.authors,
        addPost: state.addPost,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCategoryAdded: (category) => dispatch(onCategoryAdded(category)),
        onPostSave: (post, authors, categories) => dispatch(onPostSave(post, authors, categories)),
        onValueChanged: (event) => dispatch(onValueChanged(event))
    };
};

const AddPostContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPost));

export default AddPostContainer;