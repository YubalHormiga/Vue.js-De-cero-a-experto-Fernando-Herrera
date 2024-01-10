<script setup>
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { watch, watchEffect } from "vue";
import usePokemon from "../composables/usePokemon";

const { pokemon, errorMessage, searchPokemon } = usePokemon();

const route = useRoute();

watchEffect(() => {
  searchPokemon(route.params.id);
});

onBeforeRouteLeave(() => {
  const answer = window.confirm("¿Seguro de Salir?");
  if (!answer) return false;
});
</script>

<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
  <div v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
  </div>
</template>
<style scoped></style>
