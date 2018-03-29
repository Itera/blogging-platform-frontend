import PropTypes from 'prop-types';

export const Author = PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    phone: PropTypes.string
});

export const Category = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
});

export const Comment = PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    postId: PropTypes.number
});

export const Post = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    date: PropTypes.string,
    perex: PropTypes.string,
    content: PropTypes.string,
    author: Author,
    category: PropTypes.arrayOf(Category)
});