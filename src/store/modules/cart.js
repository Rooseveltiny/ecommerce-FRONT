// import router from '../../router/router'
import ApiSettings from '../ApiSettings'
import notify from '../../notifications/notificationTemplates'

export default {
    actions: {
        async fetchCart({ commit, getters }) {
            if (getters.getCartUUID != undefined) {
                let response = await fetch(`${ApiSettings.BASE_ROUTE}/cart_list/${getters.getCartUUID}`);
                if (response.status != 500) {
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
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data),
            }
            await fetch(`${ApiSettings.BASE_ROUTE}/cart_product`, request_obj).then(async (response) => {
                if (response.status != 500) {
                    let resp_data = await response.json();
                    commit('updateCartUUID', resp_data);
                    dispatch('fetchCart');
                    notify.addToCart('Товар успешно добавлен в корзину', `${resp_data.product_object.title} в корзине: ${resp_data.quantity} ${resp_data.product_object.unit_of_measurement}`)
                }
            }).catch(() => {
                notify.internetConnectionErrorNotification();
            });
        },
        async deleteFromCart({ getters, dispatch }, inputData) {
            let data = {
                product: inputData.productLink,
                cart_uuid: getters.getCartUUID,
            }
            let request_obj = {
                method: 'DELETE',
                body: JSON.stringify(data),
                headers: { 'Content-type': 'application/json' }
            }
            await fetch(`${ApiSettings.BASE_ROUTE}/cart_product`, request_obj).then(async (response) => {
                if (response.status != 500) {
                    dispatch('fetchCart');
                    notify.deletedFromCart();
                }
            }).catch(() => {
                notify.internetConnectionErrorNotification();
            });
        }
    },
    mutations: {
        updateClientCart(state, gotten_cart) {
            state.cartProducts = gotten_cart;
        },
        updateCartUUID(state, data) {
            if (Object.prototype.hasOwnProperty.call(data, "cart_uuid")) {
                if (data.cart_uuid != 'undefined') {
                    state.cartUUID = data.cart_uuid;
                    localStorage.cart_uuid = data.cart_uuid;
                }
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
        getCartUUID(state) {
            return (state.cartUUID == undefined) ? null : state.cartUUID;
        },
        getCartProducts(state) {
            return state.cartProducts;
        },
        getCartFull(state) {
            return (state.cartProducts.length > 0) ? true : false;
        }
    }
}