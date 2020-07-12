
export default {
    actions: {
        async fetchProducts({ commit }) {
            const res = await fetch(`http://localhost:3000/products/`);
            const products = await res.json();
            commit('updateProducts', products);
        }
    },
    mutations: {
        updateSortingCatalog(state, sorting) {
            state.sorting.currentSorting = sorting;
        },
        updateProducts(state, products) {
            state.productsList.products = products;
        },
        showCatalogStructure(state) {
            state.CatalogStructureVisible = !state.CatalogStructureVisible;
        },       
        closeCatalogStructureGeneral(state, event) {
            let el = event.srcElement.id;
            state.CatalogStructureVisible = (
                el == 'CatalogStructure' ||
                el == "CatalogStructureInner" ||
                el == "CatalogStructureInnerBlock") ? true : false;
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
            CatalogStructureVisible: false
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
        }
    }
}