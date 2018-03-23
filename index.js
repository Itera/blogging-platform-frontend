import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import './src/styles/menu.css';
import './src/styles/posts.css';
import './src/styles/title.css';
import './src/styles/styles.css';

import reducers from './src/reducers';

import Main from "./src/containers/main";

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('app')
);