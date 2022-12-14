import axios from "axios";

class JogadorService {
  async create(jogador) {
    const { data } = await axios.post("api/jogadores/", jogador);
    return data;
  }
  async read() {
    const { data } = await axios.get("api/jogadores/");
    return data;
  }
  async update(jogador, jogadorID) {
    console.log(jogador);
    await axios.patch(`api/jogadores/${jogadorID}/`, jogador);
  }
  async delete(jogadorID) {
    await axios.delete(`api/jogadores/${jogadorID}/`);
  }
}

export default new JogadorService();
