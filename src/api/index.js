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

function fetchAuthors() {
    return fetchFromBackend('/author');
}

function fetchCategories() {
    return fetchFromBackend('/category');
}

export default {
    fetchAuthors,
    fetchCategories,
    fetchPosts
};