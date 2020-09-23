// import router from '../../router/router'
import ApiSettings from '../ApiSettings'

export default {
    actions: {
        async fetchCart({commit, getters}){
            if (getters.getCartUUID != undefined){
                let response = await fetch(`${ApiSettings.BASE_ROUTE}/cart_list/${getters.getCartUUID}`);
                if (response.status != 500){
                    let json_data = await response.json();
                    commit('updateClientCart', json_data);
                }
            } 
        },
        async addToCart({ commit, getters, dispatch }, inputData) {
            let data = {
                product: inputData.productLink,
                quantity: Number(inputData.productQuantity),
                cart_uuid: getters.getCartUUID
            }
            let request_obj = { 
                headers:{
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data),
                }
            let response = await fetch(`${ApiSettings.BASE_ROUTE}/add_to_cart`, request_obj);
            
            if (response.status != 500){
                let resp_data = await response.json();
                commit('updateCartUUID', resp_data);
                dispatch('fetchCart');
            }
        }
    },
    mutations: {
        updateClientCart(state, gotten_cart) {
            state.cartProducts = gotten_cart;
        },
        updateCartUUID(state, data){
            if (Object.prototype.hasOwnProperty.call(data, "cart_uuid")){
                state.cartUUID = data.cart_uuid;
            }
        }
    },
    state() {
        return {
            cartProducts: [],
            cartUUID: undefined
        }
    },
    getters: {
        getCartUUID(state){
            return (state.cartUUID == undefined) ? null : state.cartUUID;
        },
        getCartProducts(state){
            return state.cartProducts;
        },
        getCartFull(state){
            return (state.cartProducts.length > 0) ? true : false;
        }
    }
}