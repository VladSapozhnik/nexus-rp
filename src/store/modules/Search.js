export default {
    state: {
        search: 'Vlad'
    },
    mutations: {
        updateSearch(state, value) {
            state.search = value;
        }
    },
    actions: {
        searchHandler (ctx, value) {
            ctx.commit('updateSearch', value);
        }
    },
    getters: {
        SEARCH(state) {
            return state.search;
        }
    }
}