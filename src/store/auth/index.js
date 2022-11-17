import axios from "axios";
import authService from "@/api/auth";

export const auth = {
  namespaced: true,
  state: () => ({
    loggedIn: false,
    user: null,
    token: null,
  }),
  mutations: {
    setToken(state, userToken) {
      state.token = userToken.access;
      state.loggedIn = true;
    },
    setLoginInfo(state, userForm) {
      state.user = userForm;
    },
    setHeaders(state) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;
    },
    unsetHeaders() {
      delete axios.defaults.headers.common["Authorization"];
    },
    setLogout(state) {
      //   state.user = null;
      //   state.token = null;
      //   state.loggedIn = false;
      //   location.reload();
    },
  },
  actions: {
    async getUser({ commit }) {
      const userForm = await authService.get();
      commit("setLoginInfo", userForm);
    },
    async login({ dispatch, commit }, userForm) {
      try {
        const userToken = await authService.login(userForm);
        commit("setToken", userToken);
        commit("setHeaders");
        dispatch("getUser");
        return Promise.resolve(userToken);
      } catch (e) {
        commit("setLogout");
        return Promise.reject(e);
      }
    },
    async register({ dispatch }, userForm) {
      try {
        await authService.register(userForm);
        await dispatch("login", userForm);
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async updateUser({ dispatch }, newUser) {
      try {
        await authService.update(newUser);
        await dispatch("getUser");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async updateUserUsername({ dispatch }, newUsername) {
      try {
        await authService.updateUsername(newUsername);
        await dispatch("getUser");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async updateUserPassword({ commit }, newPassword) {
      try {
        await authService.updatePassword(newPassword);
        commit("setLogout");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async deleteUser({ commit }, delUser) {
      try {
        await authService.deleteUserAccount(delUser);
        commit("setLogout");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
