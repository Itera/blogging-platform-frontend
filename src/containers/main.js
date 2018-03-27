import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Main from '../components/main';

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        authors: state.authors,
        posts: state.posts
    }
};

const MainContainer = withRouter(connect(
    mapStateToProps
)(Main));

export default MainContainer;