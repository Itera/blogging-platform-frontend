import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Post} from '../model';

const ViewPost = ({post}) => {
    if (!post) {
        return <div className="alert alert-danger" role="alert">This post does not exist.</div>
    }
    return <div>
        <h2>{post.title}</h2>
        <p>{post.perex}</p>
        <p>{post.content}</p>
        <Link to="/">Back</Link>
    </div>
};

ViewPost.propTypes = {
    post: PropTypes.shape(Post)
};

export default ViewPost;