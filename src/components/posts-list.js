const fakePosts = [
    {
        title: 'First post',
        author: 'Rachel Green',
        date: '2018-03-12 13:32',
        comments: [],
        perex: 'Maecenas scelerisque eu sem vel pretium. Vestibulum sed vehicula urna. Donec laoreet efficitur placerat. Pellentesque eu interdum eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Phasellus vestibulum convallis nunc in lacinia. Donec mollis non felis sed luctus. Phasellus vulputate elementum purus, placerat porta risus viverra sit amet. Integer non dapibus dui.'
    },
    {
        title: 'Second post',
        author: 'Ross Geller',
        date: '2018-03-13 17:48',
        comments: [],
        perex: 'Vestibulum efficitur, justo quis sollicitudin vestibulum, libero turpis pharetra odio, ut euismod risus felis nec nisl. Vestibulum eget blandit lorem. Curabitur vel turpis eget sapien interdum sagittis. Cras sed ante ac mi mattis fermentum. Integer auctor condimentum efficitur. Nam lacus nisl, vulputate et sapien quis, bibendum condimentum felis. Nunc mollis nec lorem pulvinar blandit. Quisque eget erat nec ligula convallis mollis at sed leo. Fusce at sollicitudin tellus, sed vestibulum massa. '
    },
    {
        title: 'Turd post',
        author: 'Chandler Bing',
        date: '2018-03-15 07:12',
        comments: ['This post rocks!'],
        perex: 'Cras tempus elit dictum turpis varius, sit amet molestie felis aliquet. Aliquam ut augue vitae risus venenatis consectetur eget non felis. Proin dapibus enim sed metus vulputate consequat. Duis quis dolor diam. Quisque sed nulla eu massa sollicitudin posuere.'
    }
];

function createPostList(posts) {
    return posts.map(post => (`
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.perex}</p>
            <div class="post-details">
                <div class="post-author">${post.author},</div>            
                <div class="post-date">${post.date},</div>            
                <div class="post-comments">(${post.comments.length} comments)</div>            
            </div>
        </div>
    `)).reduce(merge);
}

const postsList = createPostList(fakePosts);