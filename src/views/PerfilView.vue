<template>
  <div id="pefil">
    <section class="forms">
      <div class="field">
        <label class="label">Usuário</label>
        <div class="control">
          <input class="input" type="text" v-model="newUser.username" placeholder="e.g alex" />
        </div>
      </div>
      <div class="field">
        <label class="label">Digite sua nova senha</label>
        <div class="control">
          <input class="input" type="text" v-model="newPassword.new_password1" />
        </div>
      </div>
      <div class="field">
        <label class="label">Confirme sua nova senha</label>
        <div class="control">
          <input class="input" type="text" v-model="newPassword.new_password2" />
        </div>
      </div>
      <div class="control">
        <button class="button is-primary mr-2" @click="newPasswordInfo">
          Atualizar dados
        </button>
        <button class="button is-danger ml-2" @click="deleteUserAccount">
          Deletar conta
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
    newPassword: {},
  }),
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["updateUser", "changeUserPassword", "deleteUser"]),

    async updateInfo() {
      if (this.newUser.username == this.user.username)
        delete this.newUser.username;
      try {
        await this.updateUser(this.newUser);
      } catch (e) {
        console.log(e);
      }
    },
    async newPasswordInfo() {
      try {
        await this.changeUserPassword(this.newPassword);
      } catch (e) {
        console.log(e);
      }
    },
    async deleteUserAccount() {
      try {
        await this.deleteUser();
      } catch (e) {
        console.log(e);
      }
    }
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
