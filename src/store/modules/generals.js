export default {
    actions: {},
    mutations: {
        changeCurrentPage(page){
            // state.currentPage = page;
            this.$router.push(page)
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