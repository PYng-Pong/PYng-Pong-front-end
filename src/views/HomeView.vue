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
          <span @click="deletarJogador(player)" class="panel-icon">
            <i class="fas fa-trash" aria-hidden="true"></i>
          </span>
        </a>
      </article>
    </section>
    <section class="columns">
      <button class="column button" @click="verPerfil">Ver Perfil</button>
      <button class="column button" @click="isActive = true">
        Adicionar um jogador
      </button>
      <button class="column button">Remover um jogador</button>
      <button class="column button">Editar um jogador</button>
      <button class="column button" @click="setLogout">Sair</button>
    </section>
    <div :class="isActive ? 'modal is-active' : 'modal'">
      <div class="modal-background" @click="isActive = false"></div>
      <div class="modal-content">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <section class="forms">
                <div class="field">
                  <label class="label">Crie o jogador</label>
                  <div class="control">
                    <input
                      v-model="jogador.nome"
                      class="input"
                      type="email"
                      placeholder="e.g. alexsmith@gmail.com"
                    />
                  </div>
                </div>
                <div class="control">
                  <button class="button is-primary" @click="criarJogador">
                    Criar jogador
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <button
        class="modal-close is-large"
        @click="isActive = false"
        aria-label="close"
      ></button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    isActive: false,
  }),
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("player", ["jogador", "jogadores"]),
  },
  methods: {
    ...mapMutations("auth", ["setLogout"]),
    ...mapActions("player", ["postJogador", "deleteJogador"]),

    verPerfil() {
      this.$router.push({ path: "/perfil" });
    },
    paginaJogadores() {
      this.$router.push({ path: "/jogadores" });
    },
    async criarJogador() {
      try {
        this.jogador.criado_por = this.user.id;
        await this.postJogador();
        this.isActive = false;
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
