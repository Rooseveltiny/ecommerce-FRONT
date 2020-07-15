
export default {
    actions: {
        async fetchProducts({ commit }) {
            const res = await fetch(`http://127.0.0.1:8000/api/v1/shop/products/all`);
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
        closeCatalogStructureGeneral(state) {
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
            CatalogStructureVisible: false,
            filters: [
                {
                    name: 'Цвет',
                    parameters: [
                        {
                            value: 'Красный',
                        },
                        {
                            value: 'Синий',
                        },
                        {
                            value: 'Коричневый',
                        }
                    ]
                },
                {
                    name: 'Покрытие',
                    parameters: [
                        {
                            value: 'Стальной бархат',
                            choosen: false
                        },
                        {
                            value: 'Полимерное',
                            choosen: false
                        },
                        {
                            value: 'Printech',
                            choosen: false
                        }
                    ]
                },
                {
                    name: 'Толщина',
                    parameters: [
                        {
                            value: 0.5,
                            choosen: false
                        },
                        {
                            value: 0.45,
                            choosen: false
                        },
                        {
                            value: 0.4,
                            choosen: false
                        }
                    ]
                }
            ],
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
        getAllFilters(state){
            return state.filters;
        },
        getAllChoosenFilterParameters(state){
            return state.choosenFilterParameters;
        }
    }
}