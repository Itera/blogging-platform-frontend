import merge from '../utils/collection-helpers';

function createPostList(posts) {
    return posts.map(post => (`
        <div class="post">
            <h2>${post.title}</h2>
            <p>
                ${post.perex}
                <a href="#">(Read more)</a>
            </p>
            <div class="post-details">
                <div class="post-author">${post.author},</div>            
                <div class="post-date">${post.date},</div>            
                <div class="post-comments">(${post.comments.length} comments)</div>            
            </div>
        </div>
    `)).reduce(merge);
}

export default createPostList;