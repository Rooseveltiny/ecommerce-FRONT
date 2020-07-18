import router from '../../router/router'

export default {
    actions: {},
    mutations: {
        changeCurrentPage: function (state, page) {
            /// if we pass page String there's gonna be opened by name
            /// otherwise if we put some kind of an object
            /// there's gonna be put as enter router object 
            let currentPage = typeof(page) === 'string' ? { name: page } : page;
            router.push(currentPage).catch(()=>{});
        }
    },
    state() {
    },
    getters: {}
}
