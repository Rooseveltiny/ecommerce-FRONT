
export default {
    actions: {},
    mutation: {},
    state: {
        catalog: {
            sorting: {
                sortingTypes: ['по возрастанию цены', "по убыванию цены", "по наименованию", "по рейтингу"],
                currentSorting: 'по возрастанию цены'
            }
        }
    },
    getters: {
        getCurrentSortingType(state) {
            return state.catalog.sorting.currentSorting
        }
    }
}