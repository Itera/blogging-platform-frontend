import React from 'react';
import PropTypes from 'prop-types';

import {Comment} from '../model';

const CommentList = ({comments}) => <div className="comment-list">
    <h3>Comments for this post</h3>
    <ul className="list-group">
        {comments.map(comment => <li key={comment.id} className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{comment.author}</h5>
                <small>{comment.date}</small>
            </div>
            <p className="mb-1">{comment.content}</p>
        </li>)}
    </ul>
    TODO: add comment form
</div>;

CommentList.propTypes = {
    comments: PropTypes.arrayOf(Comment)
};

export default CommentList;