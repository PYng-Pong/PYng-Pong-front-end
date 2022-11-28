import axios from "axios";

class JogoService {
  async create(jogo) {
    const { data } = await axios.post("api/jogos/", jogo);
    return data;
  }
  async read({ pk }) {
    const { data } = await axios.get("api/jogos/");
    return data.filter((jogo) => jogo.criado_por.pk === pk);
  }
  async update(jogo, jogoID) {
    console.log(jogo);
    await axios.patch(`api/jogos/${jogoID}/`, jogo);
  }
  async delete(jogoID) {
    await axios.delete(`api/jogos/${jogoID}/`);
  }
}

export default new JogoService();
