import jogoService from "@/api/game";

export const game = {
  namespaced: true,
  state: () => ({
    historico_jogos: [],
    jogo: {},
  }),
  mutations: {
    setJogoInfo(state, jogosInfo) {
      state.historico_jogos = jogosInfo;
    },
    unsetJogoInfo(state) {
      state.historico_jogos = [];
      state.jogo = {};
    },
  },
  actions: {
    async getJogos({ commit, state }, currentUser) {
      const jogosInfo = await jogoService.read(currentUser);
      commit("setJogoInfo", jogosInfo);
    },
    async postJogo({ dispatch, state }) {
      try {
        await jogoService.create(state.jogo);
        await dispatch("getJogo");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async updateJogo({ dispatch, state }, jogoID) {
      try {
        await jogoService.update(state.jogo, jogoID);
        await dispatch("getJogo");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async deleteJogo({ dispatch }, jogoID) {
      try {
        await jogoService.delete(jogoID);
        await dispatch("getJogo");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
