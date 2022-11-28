<template>
  <div id="pefil">
    <section class="forms">
      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="newUser.username"
            placeholder="e.g alex"
          />
        </div>
      </div>
      <!-- <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            disabled
            class="input"
            type="email"
            v-model="newUser.email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
      </div> -->
      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input
            class="input"
            type="email"
            v-model="newUser.first_name"
            placeholder="e.g Alex"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Sobrenome</label>
        <div class="control">
          <input
            class="input"
            type="email"
            v-model="newUser.last_name"
            placeholder="e.g Smith"
          />
        </div>
      </div>
      <div class="control">
        <button class="button is-primary" @click="updateInfo">
          Atualizar dados
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.newUser = { ...this.user };
  },
  data: () => ({
    newUser: null,
  }),
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["updateUser"]),

    async updateInfo() {
      if (this.newUser.username == this.user.username)
        delete this.newUser.username;
      try {
        await this.updateUser(this.newUser);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
#perfil {
  display: flex;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
}

.forms {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2em;
}

.control {
  margin-top: 1.3em;
}
</style>
