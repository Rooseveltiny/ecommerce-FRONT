export default {
    actions: {},
    mutations: {
        changeCurrentPage(state, page){
            state.currentPage = page;
        }
    },
    state() {
        return {currentPage: 'Contacts'}
    },
    getters: {
        getCurrentPage(state){
            return state.currentPage
        }
    }
}