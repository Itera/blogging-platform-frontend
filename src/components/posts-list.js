import React from 'react';

export default ({posts}) => {
    return posts.map(post => (
        <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>
                {post.perex} <a href="#">(Read more)</a>
            </p>
            <div className="post-details">
                <div className="post-author">{post.author},</div>
                <div className="post-date">{post.date},</div>
                <div className="post-comments">({post.comments.length} comments)</div>
            </div>
        </div>
    ));
}