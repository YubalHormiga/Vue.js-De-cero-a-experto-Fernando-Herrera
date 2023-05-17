<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>Quien es este Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOption :pokemons="pokemonArr" @selection="checkAnswer" />
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGAme">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonOption from "@/components/PokemonOption.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

// console.log(getPokemonOptions())
export default {
  components: {
    PokemonPicture,
    PokemonOption,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      // console.log(this.pokemonArr);
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto¡¡¡, ${this.pokemon.name}`
      } else {
        this.message = `Upppss,era ${this.pokemon.name} `
      }
      console.log(pokemonId);
    },
    newGAme() {
      this.mixPokemonArray()
      this.pokemonArr = [],
      this.pokemon = null,
      this.showPokemon = false,
      this.showAnswer = false
    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style></style>
