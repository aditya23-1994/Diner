import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app
// search object
// current recipe object
// Shopping list object
// Liked recipe

const state = {};

const controlSearch = async () => {
        // Get query from the view
        const query = searchView.getInput();

        if (query) {
            // new search object and add the query
            state.search = new Search(query);

            // prepare UI for results
            searchView.clearInput();
            searchView.clearResults();
            renderLoader(elements.searchRes);
            
            // Search for recipes.
            await state.search.getResults();

            // Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
          
        }
}

elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
       
    }
});


