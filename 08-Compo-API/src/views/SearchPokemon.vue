<script setup>
import {ref, onActivated} from 'vue'
import usePokemon from "../composables/usePokemon";

const { pokemonId,onSubmit } = usePokemon();
const txtSearchId = ref();
onActivated(() => {
        txtSearchId.value.select()
    })

</script>

<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Número del pokemon"
      ref="txtSearchId"
      v-model="pokemonId"
    />
    <br />
    <span>Precione enter para buscar</span>
  </form>
</template>
<style scoped></style>
