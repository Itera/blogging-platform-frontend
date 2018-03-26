import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AddPost from '../components/add-post';

const mapStateToProps = (state) => {
    return state;
};

const AddPostContainer = withRouter(connect(
    mapStateToProps
)(AddPost));

export default AddPostContainer;