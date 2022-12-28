import axios from "axios";
export default {
    state: {
        animationsArray: []
    },
    mutations: {
        UPDATE_ANIMATIONS(state, animations) {
            state.animatedResult = animations;
        }
    },
    actions: {
        GET_ANIMATED_API({commit}, category = 'dance') {
            axios(`./static/animations/${category}.json`)
                .then(response => response.data)
                .then(animations => commit('UPDATE_ANIMATIONS', animations))
                .catch(() => 'Error animations')
        }
    },
    getters: {
        ANIMATE_RESULT(state) {
            return state.animatedResult;
        }
    }
}