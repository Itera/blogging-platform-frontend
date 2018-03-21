import createPostList from "./posts-list";
import title from "./title";
import {authors, categories, fakePosts, period} from "../test-data/fakes";
import {createAuthors, createCategories, createPeriod} from "./menu";

const main = `
    <div class="main container">
        <div class="title">${title}</div>
        <div class="page row">
            <div id="write-post"></div>
            <div class="menu col-sm-3 col-12">
                <ul class="row">
                    <li class="col-4 col-sm-12">${createCategories(categories)}</li>
                    <li class="col-4 col-sm-12">${createAuthors(authors)}</li>
                    <li class="col-4 col-sm-12">${createPeriod(period)}</li>
                </ul>  
                <button type="button" class="btn btn-outline-primary btn-block">
                    Add post
                </button>      
            </div>
            <div class="posts-list col-sm-9 col-12">
                ${createPostList(fakePosts)}            
            </div>
        </div>
    </div>
`;

export default main;