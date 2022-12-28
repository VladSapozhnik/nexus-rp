// import Vue from 'vue';
import Vuex from 'vuex';
import AnimationCategory from "@/store/modules/AnimationCategory";
import Search from "@/store/modules/Search";
import Animation from "@/store/modules/Animation";

// Vue.use(Vuex);

export default new Vuex.Store ({
    modules: {
        Animation,
        Search,
        AnimationCategory
    }
})