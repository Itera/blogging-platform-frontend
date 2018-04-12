import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => {
    if (error) {
        return <div className="col-12 jumbotron alert alert-danger" style={{textAlign: 'center'}}>
            {typeof error === 'string' &&
            <div>
                <h2>Oops, something went wrong. 😢</h2>
                <p>Message that is really not helpful: {error}</p>
            </div>}
            {typeof error === 'object' && <p>
                <span style={{fontWeight: 'bold'}}>{error.type} error</span>
                <p>{error.message}</p>
            </p>}
        </div>;
    }
    return null;
};

Error.propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Error;