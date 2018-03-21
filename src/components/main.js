import React from 'react';
import PropTypes from 'prop-types';

import PostList from "./posts-list";
import Title from "./title";
import {Authors, Categories, Period} from "./menu";

const Main = ({categories, authors, period, posts}) => (
    <div className="main container">
        <div className="title"><Title/></div>
        <div className="page row">
            <div className="menu col-sm-3 col-12">
                <ul className="row">
                    <li className="col-4 col-sm-12"><Categories categories={categories}/></li>
                    <li className="col-4 col-sm-12"><Authors authors={authors}/></li>
                    <li className="col-4 col-sm-12"><Period periods={period}/></li>
                </ul>
                <button type="button" className="btn btn-outline-primary btn-block">
                    Add post
                </button>
            </div>
            <div className="posts-list col-sm-9 col-12">
                <PostList posts={posts}/>
            </div>
        </div>
    </div>);

Main.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    authors: PropTypes.arrayOf(PropTypes.string),
    period: PropTypes.arrayOf(PropTypes.shape()),
    posts: PropTypes.arrayOf(PropTypes.shape()),
};

export default Main;