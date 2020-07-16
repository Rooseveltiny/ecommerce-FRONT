import router from '../../router/router'

export default {
    actions: {},
    mutations: {
        changeCurrentPage: function (state, page) {
            let currentPage = typeof(page) === 'string' ? { name: page } : page;
            router.push(currentPage).catch(()=>{});
        }
    },
    state() {
    },
    getters: {}
}
