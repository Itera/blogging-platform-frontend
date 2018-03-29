const backendURL = 'http://localhost:8080';

function fetchFromBackend(endpoint) {
    return fetch(backendURL + endpoint, {
        'mode': 'cors',
        'method': 'get',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .catch(error => console.error(error));
}

function fetchPosts() {
    return fetchFromBackend('/post');
}

function fetchPost(id) {
    return fetchFromBackend(`/post/${id}`);
}

function fetchAuthors() {
    return fetchFromBackend('/author');
}

function fetchCategories() {
    return fetchFromBackend('/category');
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
    }).then(response => response.json())
        .catch(error => console.error(error));
}

function savePost(post) {
    return postToBackend('/post', post)
}

export default {
    fetchAuthors,
    fetchCategories,
    fetchPosts,
    fetchPost,
    savePost
};