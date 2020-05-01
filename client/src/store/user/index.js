// TODO: Remove error suppression when TODO's are complete
/*eslint-disable no-unused-vars*/

import AuthService from "../../services/authentication.services";

const initialState = {
  profile: null,
  status: { loggedIn: false }
};

export const users = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, profile) {
      return AuthService.login(profile).then(
        user => {
          commit("loginSuccess", profile);
          return Promise.resolve(profile);
        },
        error => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },

    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },

    register({ commit }, profile) {
      return AuthService.register(profile).then(
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
    loginSuccess(state, profile) {
      state.status.loggedIn = true;
      state.profile = profile;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.profile = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.profile = null;
    },
    registerSuccess(state) {
      console.log("TODO: Implement register success");
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};
