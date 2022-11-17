<template>
  <div id="home">
    <section class="columns"></section>
    <section class="columns">
      <button class="column button" @click="verPerfil">Ver Perfil</button>
      <button class="column button">Adicionar um jogador</button>
      <button class="column button">Remover um jogador</button>
      <button class="column button">Editar um jogador</button>
      <button class="column button" @click="paginaJogadores">
        Ver lista de jogadores
      </button>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations("auth", ["setHeaders", "unsetHeaders"]),

    verPerfil() {
      this.$router.push({ path: "/perfil" });
    },
    paginaJogadores() {
      this.$router.push({ path: "/jogadores" });
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
