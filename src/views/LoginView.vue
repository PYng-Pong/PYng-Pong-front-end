<template>
  <div class="home">
    <img
      class="raquete1"
      alt="Duas raquetes de tênis de mesa e cinco bolinhas"
      src="../assets/raquete1.png"
    />
    <section class="losango"></section>
    <section class="login">
      <h1>Login</h1>
      <input
        v-model="usuario.username"
        @keyup.enter="fazerLogin"
        class="input-text"
        type="text"
      />
      <input
        v-model="usuario.password"
        @keyup.enter="fazerLogin"
        class="input-text"
        type="password"
      />
      <br />
      <router-link class="esqueceu-senha" to="/cadastro"
        >Faça o cadastro</router-link
      >
      <br />
      <button @click="fazerLogin" class="input-button">Efetuar Login</button>
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
    ...mapActions("auth", ["login"]),

    async fazerLogin() {
      try {
        await this.login(this.usuario);
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

.login {
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
