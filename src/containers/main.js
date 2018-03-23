import {connect} from 'react-redux'
import Main from '../components/main'

const mapStateToProps = (state) => {
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