import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import { auth } from "./auth";
import { game } from "./game";
import { match } from "./match";
import { player } from "./player";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "pyng-pong",
});

const modules = {
  auth,
  game,
  match,
  player,
};

export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
});
