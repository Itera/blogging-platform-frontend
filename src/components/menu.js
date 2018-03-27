import React from 'react';
import PropTypes from 'prop-types';
import {Author, Category} from "../model";

export const Categories = ({categories}) => (
    <div>
        <h3>📚&nbsp;Category</h3>
        <div className="categories">
            {categories && categories.map(category => <div key={category.id} className="category">
                {category.name}
            </div>)}
        </div>
    </div>);

Categories.propTypes = {
    categories: PropTypes.arrayOf(Category)
};

export const Authors = ({authors}) => (
    <div>
        <h3>🤷&nbsp;Author</h3>
        <div className="authors">
            {authors && authors.map(author => <div key={author.id} className="author">
                {author.firstName + ' ' + author.lastName}
            </div>)}
        </div>
    </div>);

Authors.propTypes = {
    authors: PropTypes.arrayOf(Author)
};