import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Category, Post} from "../model";

const AddPost = ({categories, post, onCategoryAdded, onPostSave}) => (<form>
        <div className="form-group">
            <label htmlFor="postAuthor">Author</label>
            <input type="text" className="form-control" id="postAuthor" placeholder="John Doe"
                   value={post.author}/>
        </div>
        <div className="form-group">
            <label htmlFor="postTitle">Title</label>
            <input type="text" className="form-control" id="postTitle" placeholder="How to build a house"
                   value={post.title}/>
        </div>
        <div className="form-group">
            <label htmlFor="postCategory">Categories</label>
            <input type="text" className="form-control" id="postCategory"
                   placeholder="Comma delimited list of categories" value={post.categories}/>
            <div>
                {categories && categories.map(category => <a key={category.id} onClick={onCategoryAdded}>
                    {category.name}
                </a>)}
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="postPerex">Perex</label>
            <textarea className="form-control" id="postPerex" placeholder="Short description of post" rows="3"
                      value={post.perex}/>
        </div>
        <div className="form-group">
            <label htmlFor="postContent">Content</label>
            <textarea className="form-control" id="postContent" placeholder="The rest of the article" rows="6"
                      value={post.content}/>
        </div>
        <div className="row">
            <div className="col-6">
                <button type="button" className="btn btn-outline-primary btn-block" onClick={onPostSave}>
                    Save post
                </button>
            </div>
            <div className="col-6">
                <Link to="/">
                    <button type="button" className="btn btn-block">
                        Back
                    </button>
                </Link>
            </div>
        </div>
    </form>
);

AddPost.propTypes = {
    categories: PropTypes.arrayOf(Category),
    post: PropTypes.shape(Post),
    onCategoryAdded: PropTypes.func,
    onPostSave: PropTypes.func
};

export default AddPost;