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

Post.validate = (post) => {
    let validationErrors = [];
    if (post.title === "") {
        validationErrors.push("Title of post must not be empty");
    }
    if (post.perex === "") {
        validationErrors.push("Perex must not be empty");
    }
    if (post.content === "") {
        validationErrors.push("Content must not be empty");
    }
    if (post.author === "0") {
        validationErrors.push("Author must be selected");
    }
    return validationErrors;
};