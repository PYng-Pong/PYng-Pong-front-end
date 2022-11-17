import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import { auth } from "./auth";
import { player } from "./player";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "pyng-pong",
});

const modules = {
  auth,
  player,
};

export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
});
