import jogadorService from "@/api/player";

export const player = {
  namespaced: true,
  state: () => ({
    jogadores: [],
    jogador: {},
  }),
  mutations: {
    setJogadoresInfo(state, jogadoresInfo) {
      state.jogadores = jogadoresInfo;
    },
    unsetJogadorInfo(state) {
      state.jogadores = [];
      state.jogador = {};
    },
  },
  actions: {
    async getJogadores({ commit }) {
      const jogadoresInfo = await jogadorService.read();
      commit("setJogadoresInfo", jogadoresInfo);
    },
    async postJogador({ dispatch, state }) {
      try {
        await jogadorService.create(state.jogador);
        await dispatch("getJogadores");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async updateJogador({ dispatch, state }, jogadorID) {
      try {
        await jogadorService.update(state.jogador, jogadorID);
        await dispatch("getJogadores");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async deleteJogador({ dispatch }, jogadorID) {
      try {
        await jogadorService.delete(jogadorID);
        await dispatch("getJogadores");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
