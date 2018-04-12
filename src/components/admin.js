import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Author, Category, Post} from "../model";

const AdminTable = ({items, onDelete, onUpdate}) => (
    <table className="table table-sm">
        <thead>
        <tr>
            <th scope="col" width="5%">#</th>
            <th scope="col">Name</th>
            <th scope="col" width="15%">Action</th>
        </tr>
        </thead>
        <tbody>
        {items.map(item => <tr key={item.id}>
            <th scope="row">{item.id}</th>
            {/* FIXME: This is a rather hacky solution: */}
            <td>
                {item.name || item.title || item.firstName + ' ' + item.lastName}
            </td>
            <td style={{textAlign: 'right'}}>
                {item.title && <Link to={`/edit-post/${item.id}`}>
                    <button className="btn" onClick={() => onUpdate(item.id)} style={{marginRight: '0.1em'}}>📝</button>
                </Link>}
                <button className="btn" onClick={() => onDelete(item.id)}>🗑️</button>
            </td>
        </tr>)}
        </tbody>
    </table>
);

AdminTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.oneOfType([Category, Author, Post])),
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func
};

const Admin = ({
                   categories, posts, authors,
                   deleteCategory, deletePost, deleteAuthor,
                   updateCategory, updatePost, updateAuthor
               }) => (
    <div className="col-sm-9 col-12 row">
        <h3>Delete categories</h3>
        <AdminTable items={categories} onDelete={deleteCategory} onUpdate={updateCategory}/>
        <h3>Delete posts</h3>
        <AdminTable items={posts} onDelete={deletePost} onUpdate={updatePost}/>
        <h3>Delete authors</h3>
        <AdminTable items={authors} onDelete={deleteAuthor} onUpdate={updateAuthor}/>
    </div>
);

Admin.propTypes = {
    categories: PropTypes.arrayOf(Category),
    posts: PropTypes.arrayOf(Post),
    authors: PropTypes.arrayOf(Author),
    deleteCategory: PropTypes.func,
    deletePost: PropTypes.func,
    deleteAuthor: PropTypes.func,
    updateCategory: PropTypes.func,
    updatePost: PropTypes.func,
    updateAuthor: PropTypes.func
};

export default Admin;