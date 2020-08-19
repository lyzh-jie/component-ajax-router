import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
    count: 1
};
const getters = {
    evenOrOdd() {
        return state.count % 2 == 0 ? '偶数' : '奇数'
    }
};
const mutations = {
    INCREMENT(state) {
        state.count++;
    },
    DECREMENT(state) {
        state.count--;
    },

};
const actions = {
    incrementIfOdd({
        commit,
        state
    }) {
        if (state.count % 2 == 0) {
            commit('INCREMENT')
        }
    },
    decrementIfAync({
        commit
    }) {
        setTimeout(() => {
            commit('DECREMENT')
        }, 1000)
    }
};
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});