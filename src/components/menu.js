import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Author, Category} from "../model";

const Categories = ({categories}) => (
    <div>
        <h3>📚&nbsp;Category</h3>
        <div className="categories">
            {categories && categories.map(category => <div key={category.id} className="category">
                <Link to={`/view-category/${category.id}`}>{category.name}</Link>
            </div>)}
        </div>
    </div>);

Categories.propTypes = {
    categories: PropTypes.arrayOf(Category)
};

const Authors = ({authors}) => (
    <div>
        <h3>🤷&nbsp;Author</h3>
        <div className="authors">
            {authors && authors.map(author => <div key={author.id} className="author">
                <Link to={`/view-author/${author.id}`}>{author.firstName + ' ' + author.lastName}</Link>
            </div>)}
        </div>
    </div>);

Authors.propTypes = {
    authors: PropTypes.arrayOf(Author)
};

const Menu = ({authors, categories}) => <div className="menu col-sm-3 col-12">
    <ul className="row">
        <li className="col-6 col-sm-12"><Categories categories={categories}/></li>
        <li className="col-6 col-sm-12"><Authors authors={authors}/></li>
    </ul>
    <Link to="/add-post">
        <button type="button" className="btn btn-outline-primary btn-block">
            Add post
        </button>
    </Link>
</div>;

Menu.propTypes = {
    categories: PropTypes.arrayOf(Category),
    authors: PropTypes.arrayOf(Author)
};

export default Menu;