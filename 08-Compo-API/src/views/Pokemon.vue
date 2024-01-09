<script setup>
import { useRoute } from "vue-router";
import usePokemon from "../composables/usePokemon";

const {
  pokemon,
  isLoading,
  errorMessage,
  searchPokemon,
  router,
  pokemonId,
  onSubmit,
} = usePokemon();
const route = useRoute();
searchPokemon(route.params.id);
</script>

<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando</h1>
  <h1 v-else-if="errorMessage" >{{ errorMessage }}</h1>
  <div v-else>
    <h3>{{ pokemon.name }}</h3>

  </div>
</template>
<style scoped></style>
