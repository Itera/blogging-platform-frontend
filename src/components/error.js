import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => error &&
    <div className="col-12 jumbotron alert alert-danger" style={{textAlign: 'center'}}>
        <h2>Oops, something went wrong. 😢</h2>
        <p>Message that is really not helpful: {error}</p>
    </div>;

Error.propTypes = {
    error: PropTypes.string
};

export default Error;