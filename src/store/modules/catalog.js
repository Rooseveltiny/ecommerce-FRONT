import router from '../../router/router'
import ApiSettings from '../ApiSettings'

export default {
    actions: {
        async fetchProducts({ commit }) {
            const categoryAndQueryParams = router.currentRoute.fullPath;
            const res = await fetch(`${ApiSettings.BASE_ROUTE}${categoryAndQueryParams}`);
            const products = await res.json();
            commit('updateProducts', products);   /////// Полный рефакторинг; заменить всё одной функцией
        },
        async fetchFilter({ commit }) {
            const res = await fetch(`${ApiSettings.BASE_ROUTE}/products/filter/${router.currentRoute.params.slug}`);
            const filter = await res.json();
            commit('updateFilter', filter);
        },
        async fetchCatalogStructure({ commit }) {
            const res = await fetch(`${ApiSettings.BASE_ROUTE}/catalog_structure`);
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
            queryObj['page'] = getters.getCatalogPageInfo('currentPage');
            router.replace({ query: queryObj });
        }
    },
    mutations: {
        updateSortingCatalog(state, sorting) {
            state.sorting.currentSorting = sorting;
        },
        updateProducts(state, products) {
            state.productsList.products = products.results;
            state.pagination.nextURL = products.next;
            state.pagination.prevURL = products.previous;
            state.pagination.count = products.count;
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
            choosenFilterParameters: [],
            pagination: {
                currentPage: 1,
                nextURL: 0,
                prevURL: 2,
                count: 0
            }
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
        },
        getCatalogPageInfo: state => pageSection => {
            return state.pagination[pageSection];
        }
    }
}