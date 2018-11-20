const backendURL = 'http://localhost:8080';

function handleErrors(response) {
    if (!response.ok) {
        return response.json().then((error) => {
            throw new Error(error.message)
        });
    }
    return response;
}

function fetchFromBackend(endpoint) {
    return fetch(backendURL + endpoint, {
        'mode': 'cors',
        'method': 'get',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(handleErrors)
        .then(response => response.json())
        .catch(error => {
            throw new Error("Unable to fetch from backend due to error: " + error);
        });
}

function fetchPosts() {
    return fetchFromBackend('/posts');
}

function fetchPost(id) {
    return fetchFromBackend(`/posts/${id}`);
}

function fetchCommentsForPost(postId) {
    return fetchFromBackend(`/comments/post/${postId}`);
}

function fetchAuthors() {
    return fetchFromBackend('/authors');
}

function fetchCategories() {
    return fetchFromBackend('/categorys');
}

function fetchPostsByCategory(id) {
    return fetchFromBackend(`/posts/findByCategory?category=${id}`)
}

function fetchPostsByAuthor(id) {
    return fetchFromBackend(`/posts/findByAuthor?author=${id}`)
}

function deleteFromBackend(endpoint) {
    return fetch(backendURL + endpoint, {
        'mode': 'cors',
        'method': 'delete',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(handleErrors)
        .catch(error => {
            throw new Error("Unable to delete from backend due to error: " + error);
        });
}

function deleteAuthor(id) {
    return deleteFromBackend(`/authors/${id}`);
}

function deleteCategory(id) {
    return deleteFromBackend(`/categories/${id}`);
}

function deletePost(id) {
    return deleteFromBackend(`/posts/${id}`);
}

function postToBackend(endpoint, data) {
    return fetch(backendURL + endpoint, {
        'mode': 'cors',
        'method': 'post',
        'body': JSON.stringify(data),
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(handleErrors)
        .then(response => response.json())
        .catch(error => {
            throw new Error("Unable to save to backend due to error: " + error);
        });
}

function savePost(post) {
    return postToBackend('/posts', post)
}

function saveComment(comment) {
    return postToBackend(`/comments/post/${comment.postId}`, comment);
}

function putToBackend(endpoint, data) {
    return fetch(backendURL + endpoint, {
        'mode': 'cors',
        'method': 'put',
        'body': JSON.stringify(data),
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .catch(error => {
            throw new Error("Unable to put to backend due to error: " + error);
        });
}

function updatePost(post) {
    return putToBackend(`/posts/${post.id}`, post);
}

export default {
    fetchAuthors,
    fetchCategories,
    fetchPosts,
    fetchPostsByCategory,
    fetchPostsByAuthor,
    fetchPost,
    fetchCommentsForPost,
    savePost,
    saveComment,
    deleteAuthor,
    deleteCategory,
    deletePost,
    updatePost
};
