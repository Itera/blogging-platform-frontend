import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import PostList from "./posts-list";
import {Authors, Categories} from "./menu";
import {Author, Category, Post} from "../model";

const Main = ({categories, authors, posts}) => (
    <div className="row">
        <div className="menu col-sm-3 col-12">
            <ul className="row">
                <li className="col-4 col-sm-12"><Categories categories={categories}/></li>
                <li className="col-4 col-sm-12"><Authors authors={authors}/></li>
            </ul>
            <Link to="/add-post">
                <button type="button" className="btn btn-outline-primary btn-block">
                    Add post
                </button>
            </Link>
        </div>
        <div className="posts-list col-sm-9 col-12">
            <PostList posts={posts}/>
        </div>
    </div>
);

Main.propTypes = {
    categories: PropTypes.arrayOf(Category),
    authors: PropTypes.arrayOf(Author),
    posts: PropTypes.arrayOf(Post)
};

export default Main;