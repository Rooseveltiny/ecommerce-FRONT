export default {
    actions: {},
    mutations: {
        changeCurrentPage(state, page){
            state.currentPage = page;
        }
    },
    state() {
        return {currentPage: 'Catalog'}
    },
    getters: {
        getCurrentPage(state){
            return state.currentPage
        }
    }
}