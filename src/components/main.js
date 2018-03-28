import React from 'react';
import PropTypes from 'prop-types';

import PostList from "./posts-list";
import {Post} from "../model";

const Main = ({posts}) => (
    <div className="posts-list col-sm-9 col-12">
        <PostList posts={posts}/>
    </div>
);

Main.propTypes = {
    posts: PropTypes.arrayOf(Post)
};

export default Main;