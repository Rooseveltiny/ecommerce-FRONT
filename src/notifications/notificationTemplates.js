import Vue from 'vue'

const notify = {
    addToCart(title, text, type = 'success') {
        Vue.notify({
            group: 'notifications',
            title: title,
            text: text,
            type: type
        });
    },
    internetConnectionErrorNotification() {
        let errorMessage = `
                В ходе добавления товара в корзину возникла ошибка.
                Сервер не отвечает, либо нет соедиения с интернетом.'
                `
        Vue.notify({
            group: 'notifications',
            title: 'Возникла ошибка',
            text: errorMessage,
            type: 'error'
        })
    },
    deletedFromCart(){
        Vue.notify({
            group: 'notifications',
            title: 'Товар удалён из корзины',
            type: 'warn'
        }) 
    },
    changeInCart(){
        Vue.notify({
            group: 'notifications',
            title: 'Товар в корзине изменён',
            type: 'success'
        })
    }
}

export default notify