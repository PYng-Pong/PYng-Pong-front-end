import axios from "axios";

class JogadorService {
  async create(jogador) {
    const { data } = await axios.post("api/jogadores/", jogador);
    return data;
  }
  async get() {
    const { data } = await axios.get("api/jogadores/");
    return data;
  }
  async update(jogador, jogadorID) {
    await axios.patch(`api/jogadores/${jogadorID}`, jogador);
  }
  async delete(jogador, jogadorID) {
    await axios.delete(`api/jogadores/${jogadorID}`, jogador);
  }
}

export default new JogadorService();