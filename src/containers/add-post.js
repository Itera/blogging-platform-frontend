import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import {CATEGORY_ADDED_TO_POST, POST_SAVE} from "../actions";
import AddPost from '../components/add-post';


const onCategoryAdded = (category) => ({type: CATEGORY_ADDED_TO_POST, data: category});
const onPostSave = (post) => ({type: POST_SAVE, data: post});

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        post: state.newPost,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators([onCategoryAdded, onPostSave], dispatch);
};

const AddPostContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPost));

export default AddPostContainer;