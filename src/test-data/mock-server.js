const express = require('express');

const data = require('./fakes');
const swagger = require('./swagger.json');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();

app.use(cors());
app.use(bodyParser.json());

function findPost(posts, id) {
    return id && posts.find(post => post.id === Number.parseInt(id));
}

app.get('/', (req, res) => res.json(swagger));
app.get('/post', (req, res) => res.json(data.fakePosts));
app.get('/post/findByCategory', (req, res) => res.json(data.fakePosts.filter(post => {
    return post.categories.map(category => category.id).includes(Number.parseInt(req.query.category));
})));
app.get('/post/findByAuthor', (req, res) => res.json(data.fakePosts.filter(post => {
    return post.author.id === Number.parseInt(req.query.author);
})));
app.get('/post/:id', (req, res) => res.json(findPost(data.fakePosts, req.params.id)));
app.get('/post/', (req, res) => res.json(data.fakePosts));
app.post('/post', (req, res) => res.json(req.body));
app.get('/author', (req, res) => res.json(data.authors));
app.get('/category', (req, res) => res.json(data.categories));
app.get('/comment/post/:postId', (req, res) => res.json(
    data.comments
        .filter(comment => comment.postId === Number.parseInt(req.params.postId))
        .map(comment => ({...comment, postId: Number.parseInt(req.params.postId)}))
));
app.post('/comment/post/:postId', (req, res) => res.json({...req.body, date: new Date(), id: 1}));

app.listen(8080);
console.info('Listening on port 8080');