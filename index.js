import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.min.css';

import './src/styles/menu.css';
import './src/styles/posts.css';
import './src/styles/title.css';
import './src/styles/styles.css';

import reducers from './src/reducers';
import mySaga from './src/sagas';

import Main from "./src/containers/main";
import {APPLICATION_STARTED} from "./src/actions";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

store.dispatch({type: APPLICATION_STARTED});

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('app')
);