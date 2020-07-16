import router from '../../router/router'

export default {
    actions: {},
    mutations: {
        changeCurrentPage: function (state, page) {
            let currentPage = { name: page };
            router.push(currentPage).catch(()=>{});
        }
    },
    state() {
    },
    getters: {}
}
