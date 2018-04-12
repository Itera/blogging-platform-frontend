import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {CATEGORY_ADDED_TO_POST, POST_SAVE, ADD_POST_FORM_VALUE_CHANGED, ERROR} from "../actions";
import AddPost from '../components/add-post';
import {Post} from '../model';

const onCategoryAdded = (category) => ({type: CATEGORY_ADDED_TO_POST, data: category});
const onPostSave = (post) => {
    let postValidationErrors = Post.validate(post);
    if (postValidationErrors.length === 0) {
        return {type: POST_SAVE, data: post};
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
        onPostSave: (post) => dispatch(onPostSave(post)),
        onValueChanged: (event) => dispatch(onValueChanged(event))
    };
};

const AddPostContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPost));

export default AddPostContainer;