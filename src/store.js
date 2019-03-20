import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dailyentries: [
      { id: 1, title: "Water jar", expense: 45, category: "Water" },
      { id: 2, title: "Milk", expense: 30, category: "Foods" }
    ]
  },
  getters: {
    daily(state) {
      return state.dailyentries;
    }
  },
  mutations: {},
  actions: {}
});
