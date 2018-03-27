const express = require('express');

const data = require('./fakes');
const swagger = require('./swagger.json');
const cors = require('cors');

let app = express();

app.use(cors());

app.get('/', (req, res) => res.json(swagger));
app.get('/post', (req, res) => res.json(data.fakePosts));
app.get('/author', (req, res) => res.json(data.authors));
app.get('/category', (req, res) => res.json(data.categories));
app.get('/comment', (req, res) => res.json(data.comments));

app.listen(8080);
console.info('Listening on port 8080');