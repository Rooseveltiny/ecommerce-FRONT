import router from '../../router/router'
import ApiSettings from '../ApiSettings'

export default {
    actions: {
        async fetchProducts({ commit }) {
            const categoryAndQueryParams = router.currentRoute.fullPath;
            const res = await fetch(`${ApiSettings.BASE_ROUTE}${categoryAndQueryParams}`);
            const products = await res.json();
            commit('updateProducts', products);
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
            let replaceValue = `${ApiSettings.BASE_ROUTE}/products/category/`

            // updating products
            state.productsList.products = products.results;

            // updating pagination
            let nextURL = products.next != null ? products.next.replace(replaceValue, '') : null;
            let prevURL = products.previous != null ? products.previous.replace(replaceValue, '') : null;
            let currentPageNumber = 0;

            if (nextURL != null) {
                currentPageNumber = Number(nextURL.match(/page=(\d*)/)[1]) - 1;
            } else if (prevURL != null) {
                let regExp = prevURL.match(/page=(\d*)/);
                if (regExp.length) {
                    currentPageNumber = Number(regExp[1]) + 1;
                } else {
                    currentPageNumber = 1;
                }
            } else {
                currentPageNumber = 1;
            }
            state.pagination.nextURL = nextURL;
            state.pagination.prevURL = prevURL;
            state.pagination.currentPageNumber = currentPageNumber;
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
                currentPageNumber: 1,
                nextURL: '',
                prevURL: '',
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
        },
        getCatalogPaginationURL: function (pageNumber) {

            console.log(pageNumber);
        
        }
    }
}