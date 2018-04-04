import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ViewPost from '../components/view-post';
import {ADD_COMMENT_FORM_VALUE_CHANGED, SAVE_COMMENT} from "../actions";

const mapStateToProps = (state) => {
    return {
        viewPost: state.viewPost
    }
};

const onValueChanged = (event) => ({
    type: ADD_COMMENT_FORM_VALUE_CHANGED,
    data: {name: event.target.name, value: event.target.value}
});

const onCommentSaved = (addComment) => ({type: SAVE_COMMENT, data: addComment});

const mapDispatchToProps = (dispatch) => {
    return {
        onValueChanged: (event) => dispatch(onValueChanged(event)),
        onCommentSaved: (addComment) => dispatch(onCommentSaved(addComment))
    };
};

const ViewPostContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewPost));

export default ViewPostContainer;