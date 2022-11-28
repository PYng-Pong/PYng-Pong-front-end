<template>
  <div class="home">
    <img
      class="raquete1"
      alt="Duas raquetes de tênis de mesa e cinco bolinhas"
      src="../assets/raquete1.png"
    />
    <section class="losango"></section>
    <section class="cadastro">
      <h1>Cadastro</h1>
      <input
        v-model="usuario.username"
        @keyup.enter="cadastro"
        class="input-text"
        type="text"
        placeholder="Digite seu usuário"
      />
      <input
        v-model="usuario.password1"
        @keyup.enter="cadastro"
        class="input-text"
        type="password"
        placeholder="Digite sua senha"
      />
      <input
        v-model="usuario.password2"
        @keyup.enter="cadastro"
        class="input-text"
        type="password"
        placeholder="Confirme sua senha"
      />
      <br />
      <router-link class="esqueceu-senha" to="/login">Faça o login</router-link>
      <br />
      <button @click="cadastro" class="input-button">Efetuar o Cadastro</button>
    </section>
    <img
      class="raquete2"
      alt="Duas raquetes de tênis de mesa e uma bolinha"
      src="../assets/raquete2.png"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  created() {
    this.unsetHeaders();
  },
  data: () => ({
    usuario: {},
  }),
  methods: {
    ...mapMutations("auth", ["unsetHeaders"]),
    ...mapActions("auth", ["register"]),

    async cadastro() {
      try {
        await this.register(this.usuario);
        this.$router.push({ path: "/" });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
}

.raquete1 {
  width: 14em;
  height: 14em;
}

.raquete2 {
  width: 10em;
  height: 10em;
  margin: auto 2em;
}

.losango {
  height: 14em;
  width: 14em;
  background-color: #d9d9d9;
  transform: rotate(45deg);
}

.cadastro {
  height: 13em;
  width: 18em;
  background-color: #e9e9e9;
  position: fixed;
  left: 34%;
}

.input-text {
  border: solid 1px #333;
  padding: 3px;
  margin: 3px;
}

.esqueceu-senha {
  font-size: 8px;
}

.input-button {
  margin-top: 2.3em;
  border-radius: 3em;
}
</style>
