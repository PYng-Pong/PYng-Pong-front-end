<template>
  <section class="columns">
    <button class="column button" @click="$parent.verPerfil">Ver Perfil</button>
    <button class="column button" @click="$parent.isActive = true">
      Adicionar um jogador
    </button>
    <button class="column button">Remover um jogador</button>
    <button class="column button">Editar um jogador</button>
    <button class="column button" @click="$parent.setLogout">Sair</button>
  </section>
</template>

<script>
export default {};
</script>

<style>
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
