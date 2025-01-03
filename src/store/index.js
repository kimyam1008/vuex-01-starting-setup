import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterMoudule from './modules/counter/index.js';



const store = createStore({
    modules: {
        numbers: counterMoudule
    },
    state() {
        return{
            isLoggedIn : false
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;