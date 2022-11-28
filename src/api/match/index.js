import axios from "axios";

class PartidaService {
  async create(partida) {
    const { data } = await axios.post("api/partidas/", partida);
    return data;
  }
  async read() {
    const { data } = await axios.get("api/partidas/");
    return data;
  }
  async update(partida, partidaID) {
    console.log(partida);
    await axios.patch(`api/partidas/${partidaID}/`, partida);
  }
  async delete(partidaID) {
    await axios.delete(`api/partidas/${partidaID}/`);
  }
}

export default new PartidaService();
