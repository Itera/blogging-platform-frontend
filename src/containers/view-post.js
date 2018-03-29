import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ViewPost from '../components/view-post';

const mapStateToProps = (state) => {
    return {
        viewPost: state.viewPost,
    }
};

const ViewPostContainer = withRouter(connect(
    mapStateToProps
)(ViewPost));

export default ViewPostContainer;