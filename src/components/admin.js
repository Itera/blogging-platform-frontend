import React from 'react';
import PropTypes from 'prop-types';
import {Author, Category, Post} from "../model";

const AdminTable = ({items, callback}) => (
    <table className="table table-sm">
        <thead>
        <tr>
            <th scope="col" width="5%">#</th>
            <th scope="col">Name</th>
            <th scope="col" width="10%">Action</th>
        </tr>
        </thead>
        <tbody>
        {items.map(item => <tr key={item.id}>
            <th scope="row">{item.id}</th>
            {/* FIXME: This is a rather hacky solution: */}
            <td>{item.name || item.title || item.firstName + ' ' + item.lastName}</td>
            <td>
                <button className="btn btn-primary" onClick={() => callback(item.id)}>Delete</button>
            </td>
        </tr>)}
        </tbody>
    </table>
);

AdminTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.oneOfType([Category, Author, Post])),
    callback: PropTypes.func
};

const Admin = ({categories, posts, authors, deleteCategory, deletePost, deleteAuthor}) => (
    <div className="col-sm-9 col-12 row">
        <h3>Delete categories</h3>
        <AdminTable items={categories} callback={deleteCategory}/>
        <h3>Delete posts</h3>
        <AdminTable items={posts} callback={deletePost}/>
        <h3>Delete authors</h3>
        <AdminTable items={authors} callback={deleteAuthor}/>
    </div>
);

Admin.propTypes = {
    categories: PropTypes.arrayOf(Category),
    posts: PropTypes.arrayOf(Post),
    authors: PropTypes.arrayOf(Author),
    deleteCategory: PropTypes.func,
    deletePost: PropTypes.func,
    deleteAuthor: PropTypes.func
};

export default Admin;