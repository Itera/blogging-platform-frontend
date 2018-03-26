import React from 'react';
import {Link} from "react-router-dom";

const AddPost = () => (<form>
        <div className="form-group">
            <label htmlFor="postAuthor">Author</label>
            <input type="email" className="form-control" id="postAuthor" placeholder="John Doe"/>
        </div>
        <div className="form-group">
            <label htmlFor="postTitle">Title</label>
            <input type="email" className="form-control" id="postTitle" placeholder="How to build a house"/>
        </div>
        <div className="form-group">
            <label htmlFor="postPerex">Example textarea</label>
            <textarea className="form-control" id="postPerex" rows="3"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="postContent">Example textarea</label>
            <textarea className="form-control" id="postContent" rows="6"></textarea>
        </div>
        <div>
            <button type="button" className="btn btn-outline-primary btn-block">
                Save post
            </button>
            <Link to="/">
                <button type="button" className="btn btn-block">
                    Back
                </button>
            </Link>
        </div>
    </form>
);

export default AddPost;