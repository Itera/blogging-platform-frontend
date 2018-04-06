import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Admin from '../components/admin';
import {DELETE_CATEGORY, DELETE_POST, DELETE_AUTHOR} from "../actions";

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        authors: state.authors,
        posts: state.posts
    }
};

const onCategoryDeleted = (categoryId) => ({type: DELETE_CATEGORY, data: categoryId});
const onPostDeleted = (postId) => ({type: DELETE_POST, data: postId});
const onAuthorDeleted = (authorId) => ({type: DELETE_AUTHOR, data: authorId});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCategory: (categoryId) => dispatch(onCategoryDeleted(categoryId)),
        deletePost: (postId) => dispatch(onPostDeleted(postId)),
        deleteAuthor: (authorId) => dispatch(onAuthorDeleted(authorId))
    };
};

const MainContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin));

export default MainContainer;