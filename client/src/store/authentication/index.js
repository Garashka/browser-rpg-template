// TODO: Remove error suppression when TODO's are complete
/*eslint-disable no-unused-vars*/

import AuthService from "../../services/authentication.services";

const initialState = {
  user: null,
  status: { loggedIn: false }
};

export const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        error => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },

    logout({ commit }) {
      // AuthService.logout();
      commit("logout");
    },

    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        error => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      console.log("TODO: Implement logout");
    },
    registerSuccess(state) {
      console.log("TODO: Implement register success");
    },
    registerFailure(state) {
      console.log("TODO: Implement register failure");
    }
  }
};
