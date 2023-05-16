<template>
  <h1 v-if="!pokemon">>Espere por favor ....</h1>
  <div v-else>
    <h1>¿Quien es éste pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemos="pokemonArr" @selection="checkAnswer" />
    <div v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="nuevoJuego">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";

import getPokemonOptions from "@/helpers/getPokemonOptions";

// console.log(getPokemonOptions());

export default {
  components: { PokemonOptions, PokemonPicture },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      //   console.log(this.pokemonArr)
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
      //   console.log(this.pokemon)
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true
      // console.log('Pokemon page llamado', pokemonId)

      if (selectedId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name} `
      } else {
        this.message = `Upsss, el pokemon era ${this.pokemon.name}`
      }
    },
    nuevoJuego(){
      this.mixPokemonArray()
      this.pokemonArr= [],
      this.pokemon= null,
      this.showPokemon= false,
      this.showAnswer= false,
      this.message= ""
    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
