

export default {
    actions: {
        async fetchProduct({ commit, getters }){
            const res = await fetch(`http://127.0.0.1:8000/api/v1/shop/product/${getters.getCurrentProductUuid}`);
            const product = await res.json();
            commit('updateCurrentProduct', product);
        }
    },
    mutations: {
        updateCurrentProductUuid(state, uuid){
            state.currentProduct.uuid = uuid;
        },
        updateCurrentProduct(state, product){
            state.currentProduct.obj = product;
        },
        changeSection(state, section){
            state.currentSection = section;
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
        },
        getCurrentSection(state){
            return state.currentSection;
        },
        getAllSections(state){
            return state.allSections
        },
        getCurrentProductUuid(state){
            return state.currentProduct.uuid;
        }
    }
}