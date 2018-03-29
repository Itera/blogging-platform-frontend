import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Post} from '../model';
import CommentList from "./comment-list";

const ViewPost = ({viewPost}) => {
    if (!viewPost) {
        return <div className="col-sm-9 col-12 alert alert-danger" role="alert">This post does not exist.</div>
    }
    return <div className="col-sm-9 col-12">
        <h2>{viewPost.title}</h2>
        <div>
            {viewPost.categories.map(category =>
                <span key={category.id} className="badge badge-primary category-badge">{category.name}</span>)}
        </div>
        <p>{viewPost.perex}</p>
        <p>{viewPost.content}</p>
        <Link to="/">Back</Link>
        <CommentList comments={viewPost.comments}/>
    </div>
};

ViewPost.propTypes = {
    viewPost: PropTypes.shape(Post)
};

export default ViewPost;