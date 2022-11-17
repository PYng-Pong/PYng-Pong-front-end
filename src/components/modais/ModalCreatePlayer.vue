<template>
  <div :class="$parent.isActive ? 'modal is-active' : 'modal'">
    <div class="modal-background" @click="$parent.isActive = false"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <section class="forms">
              <div class="field">
                <label class="label">Crie seu jogador</label>
                <div class="control">
                  <input
                    v-model="$parent.jogador.nome"
                    class="input"
                    type="email"
                    placeholder="e.g. alexsmith@gmail.com"
                  />
                </div>
              </div>
              <div class="control">
                <button class="button is-primary" @click="$parent.criarJogador">
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
      @click="$parent.isActive = false"
      aria-label="close"
    ></button>
  </div>
</template>

<script>
export default {};
</script>
