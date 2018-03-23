import {connect} from 'react-redux'
import Main from '../components/main'

import {categories, period, fakePosts, authors} from '../test-data/fakes';

const defaultState = {
    categories,
    period,
    authors,
    posts: fakePosts
};

const mapStateToProps = (state = defaultState) => {
    return {
        categories: state.categories,
        authors: state.authors,
        period: state.period,
        posts: state.posts
    }
};

const MainContainer = connect(
    mapStateToProps
)(Main);

export default MainContainer