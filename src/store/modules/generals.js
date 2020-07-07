export default {
    actions: {},
    mutations: {
        changeCurrentPage(state, page){
            state.currentPage = page;
        }
    },
    state: {
        currentPage: 'Contacts'
    },
    getters: {
        getCurrentPage(state){
            return state.currentPage
        }
    }
}