import router from '../../router/router'

export default {
    actions: {
        async fetchProduct({ commit }){
            const res = await fetch(`http://127.0.0.1:8000/api/v1/shop/product/${router.currentRoute.params.uuid}`);
            const product = await res.json();
            commit('updateCurrentProduct', product);
        }
    },
    mutations: {
        updateCurrentProduct(state, product){
            state.currentProduct.obj = product;
        }
    },
    state() {
        return {
            currentProduct: {
                uuid: '',
                obj: {}
            }
        }
    },
    getters: {
        product(state){
            return state.currentProduct.obj
        }
    }
}