export default {
    actions: {},
    mutations: {
        changeCurrentPage(state, page){
            state.currentPage = page;
        }
    },
    state: {
        currentPage: ''
    },
    getters: {
        getCurrentPage(state){
            return state.currentPage
        }
    }
}