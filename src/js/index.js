import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/** Global State of the app
 * Search object
 * Current recipe object
 * Shopping list object
 * Like Recipes
 */
const state = {};

const controlSearch = async () => {
    //1. Get the query from view
    const query = searchView.getInput(); //TODO
    console.log(query);

    if (query) {
        //2. new search object and add to state
        state.search = new Search(query);
        //3. Prepare UI for results
        
        //4 Search for recipes
        await state.search.getResults();

        //5 Render results on UI
        console.log(state.search.result);
        searchView.renderResults(query);
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();

})

