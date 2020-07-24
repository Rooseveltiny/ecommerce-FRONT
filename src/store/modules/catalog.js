import router from '../../router/router'

export default {
    actions: {
        async fetchProducts({ commit }) {
            const baseRoute = 'http://127.0.0.1:8000/api/v1/shop/products/category/'
            const category = router.currentRoute.params.slug
            const res = await fetch(`${baseRoute}${category}`);
            // const filter = router;
            // const res = await fetch(`${baseRoute}${category}${filter}`);
            const products = await res.json();
            commit('updateProducts', products);
        },
        async fetchFilter({ commit }) {
            const res = await fetch(`http://127.0.0.1:8000/api/v1/shop/products/filter/${router.currentRoute.params.slug}`);
            const filter = await res.json();
            commit('updateFilter', filter);
        },
        async fetchCatalogStructure({ commit }) {
            const res = await fetch(`http://127.0.0.1:8000/api/v1/shop/catalog_structure`);
            const categories = await res.json();
            commit('updateCategories', categories);
        },
        setQueryParams({ getters }) {
            let queryObj = Object();
            let allChoosen = getters.getAllChoosenFilterParameters;
            for (let filterItem of allChoosen) {
                let nameOfValue = filterItem['detail_group'].slug;
                let choosenValues = [];
                allChoosen.forEach(value => {
                    if (value['detail_group'].slug == nameOfValue) {
                        choosenValues.push(value['slug']);
                    }
                })
                queryObj[nameOfValue] = choosenValues;
            }
            router.push({ query: queryObj });
        }
    },
    mutations: {
        updateSortingCatalog(state, sorting) {
            state.sorting.currentSorting = sorting;
        },
        updateProducts(state, products) {
            state.productsList.products = products;
        },
        updateCategories(state, categories) {
            state.categories = categories;
        },
        showCatalogStructure(state) {
            state.CatalogStructureVisible = !state.CatalogStructureVisible;
        },
        closeCatalogStructureGeneral(state) {
            let el = event.srcElement.id;
            state.CatalogStructureVisible = (
                el == 'CatalogStructure' ||
                el == "CatalogStructureInner" ||
                el == "CatalogStructureInnerBlock") ? true : false;
        },
        updateFilter(state, filter) {
            state.filters = filter;
        }
    },
    state() {
        return {
            sorting: {
                sortingTypes: ['по возрастанию цены', "по убыванию цены", "по наименованию", "по рейтингу"],
                currentSorting: 'по возрастанию цены'
            },
            productsList: {
                products: []
            },
            categories: {},
            CatalogStructureVisible: false,
            filters: [],
            choosenFilterParameters: []
        }
    },
    getters: {
        getCurrentSortingType(state) {
            return state.sorting.currentSorting
        },
        getAllSortingTypes(state) {
            return state.sorting.sortingTypes;
        },
        getProducts(state) {
            return state.productsList.products
        },
        catalogLoadingBlock(state) {
            return state.productsList.products.length;
        },
        getCatalogStructureVision(state) {
            return state.CatalogStructureVisible;
        },
        getAllFilters(state) {
            return state.filters;
        },
        getAllChoosenFilterParameters(state) {
            return state.choosenFilterParameters;
        },
        getCategories(state) {
            return state.categories;
        }
    }
}