import Vue from "vue";
import Vuex from "vuex";

import { users } from "./user";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    window: {
      title: "Browser RPG Template",
      showLeftDrawer: true
    }
  },
  mutations: {
    showLeftDrawer(state, boolean) {
      state.window.showLeftDrawer = boolean;
    }
  },
  actions: {},
  modules: {
    users,
    auth
  }
});
