import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './src/styles/menu.css';
import './src/styles/posts.css';
import './src/styles/title.css';
import './src/styles/styles.css';

import {fakePosts, authors, categories, period} from './src/test-data/fakes';

import Main from "./src/components/main";

ReactDOM.render(
    <Main authors={authors}
          categories={categories}
          posts={fakePosts}
          period={period}/>,
    document.getElementById('app')
);