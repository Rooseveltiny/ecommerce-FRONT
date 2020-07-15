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
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: MainPage
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: Catalog

        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts

        },
        {
            path: '/about_company',
            name: 'about_company',
            component: AboutCompany

        },
        {
            path: '/about_project',
            name: 'about_project',
            component: AboutProject

        },
        {
            path: '/product',
            name: 'product',
            component: ProductPage
        }
    ]
})

export default router;