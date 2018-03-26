import React from 'react';
import PropTypes from 'prop-types';

export const Categories = ({categories}) => (
    <div>
        <h3>📚&nbsp;Category</h3>
        <div className="categories">
            {categories && categories.map(category => <div key={category} className="category">{category}</div>)}
        </div>
    </div>);

Categories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string)
};

export const Authors = ({authors}) => (
    <div>
        <h3>🤷&nbsp;Author</h3>
        <div className="authors">
            {authors && authors.map(author => <div key={author} className="author">{author}</div>)}
        </div>
    </div>);

Authors.propTypes = {
    authors: PropTypes.arrayOf(PropTypes.string)
};

export const Period = ({periods}) => (
    <div>
        <h3>⏲&nbsp;Period</h3>
        <div className="period">
            {periods && periods.map(period => <div key={period.value} className={period.className}>{period.value}</div>)}
        </div>
    </div>);

Period.propTypes = {
    periods: PropTypes.arrayOf(PropTypes.shape())
};