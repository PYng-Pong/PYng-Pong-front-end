import partidaService from "@/api/match";

export const match = {
  namespaced: true,
  state: () => ({
    historico_partidas: [],
    partida: {},
  }),
  mutations: {
    setPartidaInfo(state, partidasInfo) {
      state.historico_partidas = partidasInfo;
    },
    unsetPartidaInfo(state) {
      state.historico_partidas = [];
      state.partida = {};
    },
  },
  actions: {
    async getPartidas({ commit }) {
      const partidasInfo = await partidaService.read();
      commit("setPartidaInfo", partidasInfo);
    },
    async postPartida({ dispatch, state }) {
      try {
        await partidaService.create(state.partida);
        await dispatch("getPartida");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async updatePartida({ dispatch, state }, partidaID) {
      try {
        await partidaService.update(state.partida, partidaID);
        await dispatch("getPartida");
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async deletePartida({ dispatch }, partidaID) {
      try {
        await partidaService.delete(partidaID);
        await dispatch("getPartida");
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
};
