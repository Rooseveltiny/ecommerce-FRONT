export default {
    actions: {
        async fetchProduct({ commit }) {
            const res = await fetch(`http://localhost:3000/currentProduct`);
            const product = await res.json();
            commit('updateProduct', product);
        }
    },
    mutations: {
        updateProduct(state, product){
            state.product = product;
        }
    },
    state() {
        return {
            product: {}
        }
    },
    getters: {
        product(state){
            return state.product
        }
    }
}