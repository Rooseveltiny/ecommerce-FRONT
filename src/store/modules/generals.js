import router from '../../router/router'

export default {
    actions: {},
    mutations: {
        changeCurrentPage(state, page){
            // state.currentPage = page;
            // state.currentPage = page;
            router.push(page);
        }
    },
    state() {
        // return {currentPage: '/contacts'}
    },
    getters: {
        getCurrentPage(){
            console.log(router.currentRoute);
            return router.currentRoute.name;
        }
    }
}