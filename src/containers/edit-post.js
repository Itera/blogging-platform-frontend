import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
    CATEGORY_ADDED_TO_POST,
    POST_UPDATE,
    ERROR,
    EDIT_POST_FORM_VALUE_CHANGED
} from "../actions";
import AddPost from '../components/add-post';
import {Post} from '../model';

const onCategoryAdded = (category) => ({type: CATEGORY_ADDED_TO_POST, data: category});
const onPostUpdate = (post) => {
    if (Post.validate(post)) {
        return {type: POST_UPDATE, data: post};
    }
    return {type: ERROR, data: "Error in field validation of Post."}
};
const onValueChanged = (event) => ({
    type: EDIT_POST_FORM_VALUE_CHANGED,
    data: {name: event.target.name, value: event.target.value}
});

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        authors: state.authors,
        addPost: state.editPost,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCategoryAdded: (category) => dispatch(onCategoryAdded(category)),
        onPostSave: (post) => dispatch(onPostUpdate(post)),
        onValueChanged: (event) => dispatch(onValueChanged(event))
    };
};

const EditPostContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPost));

export default EditPostContainer;