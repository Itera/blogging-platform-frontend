import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Author, Category, Post} from "../model";

const AddPost = ({categories, authors, post, onCategoryAdded, onPostSave, onValueChanged}) => (<form>
        <div className="form-group">
            <label htmlFor="postAuthor">Author</label>
            <input type="text" className="form-control" id="postAuthor" name="author" placeholder="John Doe"
                   value={post.author} onChange={onValueChanged}/>
            or:
            <select onChange={onValueChanged} name="existingAuthor" id="existingAuthor">
                <option value={0}>Select existing one...</option>
                {authors.map(author => <option key={author.id} value={author.firstName + ' ' + author.lastName}>
                    {author.firstName + ' ' + author.lastName}
                </option>)}
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="postTitle">Title</label>
            <input type="text" className="form-control" id="postTitle" name="title" placeholder="How to build a house"
                   value={post.title} onChange={onValueChanged}/>
        </div>
        <div className="form-group">
            <label htmlFor="postCategory">Categories</label>
            <input type="text" className="form-control" id="postCategory" name="categories" onChange={onValueChanged}
                   placeholder="Comma delimited list of categories" value={post.categories}/>
            <div>
                {categories && categories.map(category =>
                    <a key={category.id} onClick={() => onCategoryAdded(category.name)}>
                        <span className="badge badge-primary category-badge">{category.name}</span>
                    </a>)}
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="postPerex">Perex</label>
            <textarea className="form-control" id="postPerex" name="perex" placeholder="Short description of post"
                      rows="3" value={post.perex} onChange={onValueChanged}/>
        </div>
        <div className="form-group">
            <label htmlFor="postContent">Content</label>
            <textarea className="form-control" id="postContent" name="content" placeholder="The rest of the article"
                      rows="6" value={post.content} onChange={onValueChanged}/>
        </div>
        <div className="row">
            <div className="col-6">
                <Link to="/">
                    <button type="button" className="btn btn-outline-primary btn-block"
                            onClick={() => onPostSave(post)}>
                        Save post
                    </button>
                </Link>
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
    authors: PropTypes.arrayOf(Author),
    post: PropTypes.shape({
        author: PropTypes.string,
        title: Post.title,
        categories: PropTypes.string,
        perex: Post.perex,
        content: Post.content
    }),
    onCategoryAdded: PropTypes.func,
    onPostSave: PropTypes.func,
    onValueChanged: PropTypes.func
};

export default AddPost;