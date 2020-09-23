// import router from '../../router/router'
import ApiSettings from '../ApiSettings'

export default {
    actions: {
        async addToCart({ commit, getters }, productUUID) {
            let data = {
                product: productUUID,
                quantity: 1,
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
            let resp_data = await response.json();
            commit('updateCartUUID', resp_data);
        }
    },
    mutations: {
        updateClientCart() {
            return undefined;
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
        }
    }
}