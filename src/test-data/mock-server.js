const express = require('express');

const data = require('./fakes');
const swagger = require('./swagger.json');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();

app.use(cors());
app.use(bodyParser.json());

let inMemoryPosts = data.fakePosts;
let inMemoryAuthors = data.authors;
let inMemoryCategories = data.categories;

function findPost(posts, id) {
    return id && posts.find(post => post.id === Number.parseInt(id));
}

app.get('/', (req, res) => res.json(swagger));
app.get('/post', (req, res) => res.json(inMemoryPosts));
app.get('/post/findByCategory', (req, res) => res.json(inMemoryPosts.filter(post => {
    return post.categories.map(category => category.id).includes(Number.parseInt(req.query.category));
})));
app.get('/post/findByAuthor', (req, res) => res.json(inMemoryPosts.filter(post => {
    return post.author.id === Number.parseInt(req.query.author);
})));
app.get('/post/:id', (req, res) => res.json(findPost(inMemoryPosts, req.params.id)));
app.get('/post/', (req, res) => res.json(inMemoryPosts));
app.post('/post', (req, res) => res.json(req.body));
app.get('/author', (req, res) => res.json(inMemoryAuthors));
app.get('/category', (req, res) => res.json(inMemoryCategories));
app.get('/comment/post/:postId', (req, res) => res.json(
    data.comments
        .filter(comment => comment.postId === Number.parseInt(req.params.postId))
        .map(comment => ({...comment, postId: Number.parseInt(req.params.postId)}))
));
app.post('/comment/post/:postId', (req, res) => res.json({...req.body, date: new Date(), id: 1}));
app.delete('/post/:id', (req, res) => {
    inMemoryPosts = inMemoryPosts.filter(post => post.id !== Number.parseInt(req.params.id));
    return res.json({status: 202});
});
app.delete('/category/:id', (req, res) => {
    inMemoryCategories = inMemoryCategories.filter(category => category.id !== Number.parseInt(req.params.id));
    return res.json({status: 202});
});
app.delete('/author/:id', (req, res) => {
    inMemoryAuthors = inMemoryAuthors.filter(author => author.id !== Number.parseInt(req.params.id));
    return res.json({status: 202});
});

app.listen(8080);
console.info('Listening on port 8080');