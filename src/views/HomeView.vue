<template>
  <div id="home">
    <section class="columns">
      <article class="panel is-success">
        <p class="panel-heading">Jogadores</p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-success" type="text" placeholder="Search" />
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <a
          class="panel-block is-justify-content-space-between"
          v-for="player in jogadores"
          :key="player.id"
        >
          <span class="panel-icon">
            <i class="fas fa-table-tennis" aria-hidden="true"></i>
          </span>
          {{ player.nome }}
          <div>
            <span @click="setEdit(player)" class="panel-icon">
              <i class="fas fa-pen" aria-hidden="true"></i>
            </span>
            <span @click="deletarJogador(player)" class="panel-icon">
              <i class="fas fa-trash" aria-hidden="true"></i>
            </span>
          </div>
        </a>
      </article>
    </section>
    <NavBar />

    <!-- Modais -->
    <ModalShowAllPlayers />
    <ModalCreatePlayer />
    <ModalUpdatePlayer />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import NavBar from "../components/NavBar.vue";
import ModalShowAllPlayers from "../components/modais/ModalShowAllPlayers.vue";
import ModalCreatePlayer from "../components/modais/ModalCreatePlayer.vue";
import ModalUpdatePlayer from "../components/modais/ModalUpdatePlayer.vue";

export default {
  components: {
    NavBar,
    ModalShowAllPlayers,
    ModalCreatePlayer,
    ModalUpdatePlayer,
  },
  data: () => ({
    isActive: false,
    isEditing: false,
    showQueue: false,
  }),
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("player", ["jogador", "jogadores"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("player", ["postJogador", "updateJogador", "deleteJogador"]),

    verPerfil() {
      this.$router.push({ path: "/perfil" });
    },
    paginaJogadores() {
      this.$router.push({ path: "/jogadores" });
    },
    setEdit(player) {
      this.isEditing = true;
      this.jogador.nome = player.nome;
      this.jogador.id = player.id;
      this.isEditing = true;
    },
    async criarJogador() {
      try {
        this.jogador.criado_por = this.user.pk;
        await this.postJogador();
        this.isActive = false;
      } catch (e) {
        console.log(e);
      }
    },
    async editarJogador(jogadorID) {
      try {
        await this.updateJogador(jogadorID);
        this.isEditing = false;
      } catch (e) {
        console.log(e);
      }
    },
    async deletarJogador({ id }) {
      try {
        await this.deleteJogador(id);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
#home {
  display: flex;
  justify-content: space-between;
  height: 85vh;
  box-sizing: border-box;
  margin: 0;
}

.columns {
  flex-direction: column;
  margin: 2em;
}

.column {
  background-color: #d9d9d9;
  padding: 1.2em;
  margin: 4px;
}
</style>
