export default {
    actions: {},
    mutations: {
        changeCurrentPage(state, page){
            state.currentPage = page;
        }
    },
    state: {
        currentPage: 'Catalog'
    },
    getters: {
        getCurrentPage(state){
            return state.currentPage
        }
    }
}