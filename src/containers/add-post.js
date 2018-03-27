import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {CATEGORY_ADDED_TO_POST, POST_SAVE, POST_FORM_VALUE_CHANGED} from "../actions";
import AddPost from '../components/add-post';


const onCategoryAdded = (category) => ({type: CATEGORY_ADDED_TO_POST, data: category});
const onPostSave = (post) => ({type: POST_SAVE, data: post});
const onValueChanged = (event) => ({
    type: POST_FORM_VALUE_CHANGED,
    data: {name: event.target.name, value: event.target.value}
});

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        authors: state.authors,
        post: state.post,
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