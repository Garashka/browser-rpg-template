// TODO: Remove error suppression when TODO's are complete
/*eslint-disable no-unused-vars*/

import Vue from "vue";

const state = {
  token: null,
  status: ""
};

const getters = {
  token: state => state.token,
  isAuthenticated: state => !!state.token
};

const actions = {
  login({ commit, dispatch }, user) {
    return new Promise((resolve, reject) => {
      commit("loginRequest");
      Vue.prototype.$axios
        .post("/api/auth/signin/", user)
        .then(
          response => {
            commit("loginSuccess", response);
            resolve(response);
          },
          error => {
            console.log('login failure');
            commit("loginFailure");
            reject(error);
          }
        );
    });
  },

  logout({ commit }) {
    commit("logout");
  },

  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("loginRequest");
      Vue.prototype.$axios
        .post("/api/auth/signup/", user)
        .then(
          response => {
            console.log(response);
            commit("registerSuccess");
            resolve(response);
          },
          error => {
            console.log('register failure');
            commit("registerFailure");
            reject(error);
          }
        );
    });
  }
};

const mutations = {
  loginRequest: state => {
    state.status = "loading";
  },
  loginSuccess(state, payload) {
    state.token = payload.data.accessToken;
    state.profile = payload;
  },
  loginFailure(state) {
    state.profile = null;
  },
  logout(state) {
    state.token = null;
  },
  registerSuccess(state) {
    console.log("TODO: Implement register success");
  },
  registerFailure(state) {
    console.log("TODO: Implement register failure");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
