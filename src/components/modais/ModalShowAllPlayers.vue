<template>
  <div :class="$parent.showQueue ? 'modal is-active' : 'modal'">
    <div class="modal-background" @click="$parent.showQueue = false"></div>
    <section class="columns card">
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
          class="modal-content panel-block is-justify-content-space-between"
          v-for="player in $parent.jogadores"
          :key="player.id"
        >
          <span class="panel-icon">
            <i class="fas fa-table-tennis" aria-hidden="true"></i>
          </span>
          {{ player.nome }}
          <div>
            <span @click="$parent.setEdit(player)" class="panel-icon">
              <i class="fas fa-pen" aria-hidden="true"></i>
            </span>
            <span @click="$parent.deletarJogador(player)" class="panel-icon">
              <i class="fas fa-trash" aria-hidden="true"></i>
            </span>
          </div>
        </a>
      </article>
    </section>
    <button
      class="modal-close is-large"
      @click="$parent.showQueue = false"
      aria-label="close"
    ></button>
  </div>
</template>

<script>
export default {};
</script>
