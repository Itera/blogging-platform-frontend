import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {HashRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './src/styles/menu.css';
import './src/styles/posts.css';
import './src/styles/title.css';
import './src/styles/styles.css';

import reducers from './src/reducers';
import mainSaga from './src/sagas';

import Title from "./src/components/title";
import Main from "./src/containers/main";
import AddPost from "./src/containers/add-post";
import ViewPost from "./src/containers/view-post";
import Menu from './src/containers/menu';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mainSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="main container">
                <div className="title"><Title/></div>
                <div className="page row">
                    <Menu {...store}/>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/view-post/:id" component={ViewPost}/>
                    <Route exact path="/add-post" component={AddPost}/>
                </div>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
)
;