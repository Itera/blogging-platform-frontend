import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ErrorBoundary from '../components/error';

const mapStateToProps = (state) => {
    return {
        error: state.error,
    }
};

const ErrorBoundaryContainer = withRouter(connect(
    mapStateToProps
)(ErrorBoundary));

export default ErrorBoundaryContainer;