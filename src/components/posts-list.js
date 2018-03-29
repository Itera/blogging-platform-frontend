import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Post} from '../model';

const posts = ({posts}) => {
    return posts ? posts.map(post => (
        <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>
                {post.perex} <Link to={`/view-post/${post.id}`}>(Read more)</Link>
            </p>
            <div className="post-details">
                <div className="post-author">{post.author.firstName + post.author.lastName},</div>
                <div className="post-date">{post.date},</div>
                <div className="post-comments">({post.comments.length} comments)</div>
            </div>
        </div>
    )) : <div style={{fontSize: '2em'}}>No posts yet...</div>;
};

posts.propTypes = {
    posts: PropTypes.arrayOf(Post)
};

export default posts;