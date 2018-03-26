import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import PostList from "./posts-list";
import {Authors, Categories, Period} from "./menu";

const Main = ({categories, authors, period, posts}) => (
    <div className="row">
        <div className="menu col-sm-3 col-12">
            <ul className="row">
                <li className="col-4 col-sm-12"><Categories categories={categories}/></li>
                <li className="col-4 col-sm-12"><Authors authors={authors}/></li>
                <li className="col-4 col-sm-12"><Period periods={period}/></li>
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
    categories: PropTypes.arrayOf(PropTypes.string),
    authors: PropTypes.arrayOf(PropTypes.string),
    period: PropTypes.arrayOf(PropTypes.shape()),
    posts: PropTypes.arrayOf(PropTypes.shape()),
};

export default Main;