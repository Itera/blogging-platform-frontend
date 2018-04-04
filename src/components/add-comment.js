import React from 'react';
import PropTypes from 'prop-types';
import {Comment} from '../model';

const AddComment = ({addComment, onValueChanged, onCommentSaved}) => {
    return <div style={{marginTop: '1em', marginBottom: '1em'}}>
        <h5>Add a comment for this post</h5>
        <form>
            <div className="form-group">
                <label htmlFor="commentAuthor">Name</label>
                <input type="text" className="form-control" id="commentAuthor" name="author"
                       placeholder="Your name"
                       value={addComment.author} onChange={onValueChanged}/>
            </div>
            <div className="form-group">
                <label htmlFor="commentAuthor">Content</label>
                <textarea className="form-control" id="commentContent" name="content"
                          placeholder="Comment content" rows="5"
                          value={addComment.content} onChange={onValueChanged}/>
            </div>
            <button type="button" className="btn btn-outline-primary btn-block"
                    onClick={() => onCommentSaved(addComment)}>
                Add comment
            </button>
        </form>
    </div>
};

AddComment.propTypes = {
    addComment: PropTypes.oneOfType([Comment, PropTypes.any]),
    onValueChanged: PropTypes.func,
    onCommentSaved: PropTypes.func
};

export default AddComment;