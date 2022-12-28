import axios from "axios";

export default {
    state: {
        categoryAnimated: [],
    },
    mutations: {
        UPDATE_CATEGORY_ANIMATED (state, animate) {
            state.categoryAnimated = animate;
        },
        // SEARCH_CATEGORY_ANIMATED (state) {
        //
        // }
    },
    actions: {
        GET_CATEGORY_ANIMATED(ctx) {
            axios(`./static/animations/animations.json`)
                .then(response => {
                    ctx.commit('UPDATE_CATEGORY_ANIMATED', response.data)
                })
        }
    },
    getters: {
        ANIMATED_CATEGORY_RESULT(state) {
            return state.categoryAnimated;
        },
    }
}