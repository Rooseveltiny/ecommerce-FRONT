import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '../components/MainPage/MainPage'
import Catalog from '../components/Catalog/Catalog'
import Contacts from "../components/Contacts/Contacts.vue";
import AboutCompany from "../components/Information/AboutCompany";
import AboutProject from "../components/Information/AboutProject";
import ProductPage from "../components/Product/ProductPage";
import Categories from "../components/CatalogStructure/Categories";
import FeedBack from "../components/Generals/FeedBack";
import FAQ from "../components/Generals/FAQ";
import CartPage from "../components/Cart/CartPage"

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
            props: {
                sort_field: 'default'
            },
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
        {
            path: '/cart',
            name: 'Cart',
            component: CartPage
        },
        {
            path: '/catalog/categories',
            name: 'Categories',
            component: Categories
        },
        {
            path: '/feedback',
            name: 'FeedBack',
            component: FeedBack
        },
        {
            path: '/faq',
            name: 'FAQ',
            component: FAQ
        }
    ]
})

export default router;