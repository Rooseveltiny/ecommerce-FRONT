// import router from '../../router/router'
import ApiSettings from '../ApiSettings'

export default {
    actions: { 
       async fetchSearchResult({commit}, searchInputValue){
        let apiCall = '/search_products';
        let searchInput = `?search_input_value=${searchInputValue}`;
        const res = await fetch(`${ApiSettings.BASE_ROUTE}${apiCall}${searchInput}`);
        const searchResult = await res.json();
        commit('updateSearchResult', searchResult);
        }
    },
    mutations: {
        clearSearchResult(state){
            state.searchResult.products = [];
            state.searchResult.categories = [];
            state.searchResult.nothing_found = false;
        },
        updateSearchResult(state, searchResult){
            state.searchResult = searchResult;
        }
    },
    state() {
        return {
            searchResult: {
                products: [],
                categories: [],
                nothing_found: false
            }
        }
    },
    getters: {
        getSearchResult(state){
            return state.searchResult; 
        }
    }
}