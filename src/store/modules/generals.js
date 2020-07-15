import router from '../../router/router'

export default {
    actions: {},
    mutations: {
        changeCurrentPage: function(state, page){
            let currentPage = {name: page};
            router.push(currentPage);
            state.currentPage = currentPage;
        }
    },
    state() {
        return {currentPage: {name: 'MainPage'}}
    },
    getters: {
        getCurrentPage: function(state){
            return state.currentPage.name;
        }
    }
}
