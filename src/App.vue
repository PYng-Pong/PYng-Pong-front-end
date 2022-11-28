<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  created() {
    this.loggedIn ? this.setHeaders() : this.unsetHeaders();
    this.loggedIn ? this.getJogos(this.user) : this.unsetJogoInfo();
    this.loggedIn ? this.getPartidas(this.user) : this.unsetPartidaInfo();
    this.loggedIn ? this.getJogadores(this.user) : this.unsetJogadorInfo();
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapMutations("auth", ["setHeaders", "unsetHeaders"]),
    // Jogo
    ...mapMutations("game", ["unsetJogoInfo"]),
    ...mapActions("game", ["getJogos"]),
    // Partida
    ...mapMutations("match", ["unsetPartidaInfo"]),
    ...mapActions("match", ["getPartidas"]),
    // Jogador
    ...mapMutations("player", ["unsetJogadorInfo"]),
    ...mapActions("player", ["getJogadores"]),
  },
};
</script>

<style lang="sass" src="bulma" />
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
