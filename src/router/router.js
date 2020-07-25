import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '../components/MainPage/MainPage'
import Catalog from '../components/Catalog/Catalog'
import Contacts from "../components/Contacts/Contacts.vue";
import AboutCompany from "../components/Information/AboutCompany";
import AboutProject from "../components/Information/AboutProject";
import ProductPage from "../components/Product/ProductPage";

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/products/category/:slug',
            name: 'Catalog',
            component: Catalog
            
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        },
        {
            path: '/about_company',
            name: 'AboutCompany',
            component: AboutCompany
        },
        {
            path: '/about_project',
            name: 'AboutProject',
            component: AboutProject
        },
        {
            path: '/catalog/product/:uuid',
            name: 'Product',
            component: ProductPage
        },
    ]
})

export default router;