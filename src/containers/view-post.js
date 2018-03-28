import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ViewPost from '../components/view-post';

function selectPost(posts, id) {
    return posts.find(post => post.id === Number.parseInt(id));
}

const mapStateToProps = (state, ownProps) => {
    return {
        viewPost: selectPost(state.posts, ownProps.match.params.id),
    }
};

const ViewPostContainer = withRouter(connect(
    mapStateToProps
)(ViewPost));

export default ViewPostContainer;