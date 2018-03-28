import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Menu from '../components/menu';

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        authors: state.authors
    }
};

const MenuContainer = withRouter(connect(
    mapStateToProps
)(Menu));

export default MenuContainer;