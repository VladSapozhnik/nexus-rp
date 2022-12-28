import * as Vue from 'vue'
import App from './App.vue'
// import {createStore} from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import './app.scss';
import store from './store/index'
// import animations from "./animations.json";

// const store = createStore({
//     state () {
//         return {
//             count: 0,
//             animations: animations
//         }
//     },
//     mutations: {
//         increment (state) {
//             state.count++;
//         }
//     }
// })

const app = Vue.createApp(App);

app.use(VueAxios, axios);
app.use(PerfectScrollbar);
app.use(store);

app.mount('#app')
