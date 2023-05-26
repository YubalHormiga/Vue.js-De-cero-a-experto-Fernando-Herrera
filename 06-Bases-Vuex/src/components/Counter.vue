<template>
  <h1>Counter Vuex</h1>
  <h2>Direct Acces:{{ $store.state.counter.count }}</h2>
  <h2>Computed:{{ countComputed }}</h2>

  <button @click="increment">Increment +1</button>
  <button @click="incrementBy">Increment +5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState:{{ count }}</h2>
  <h3>lastMutation: {{ lastMutation }}</h3>

  <h2>Direct getters: {{ $store.getters['counter/squareCount'] }}</h2>
</template>
<script>
import { mapState, mapActions} from "vuex";

export default {
  name: "CounterVue",

  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState('counter', ["count", "lastMutation", "isLoading"]),
    // OTRA  FORMA
    // ...mapState({
    //   count: state => state.count,
    //   lastMutation: state => state.lastMutation ó lastMutation:'lastMutation'
    // })
  },
  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
    },

    // incrementRandomInt() {
    //   this.$store.dispatch("incrementRandomInt");
    // },
    // ...mapActions('counter', ['incrementRandomInt'])
    //Por si tenemos otro método con el mismo nombre se hace :
    ...mapActions('counter', {
      randomInt: "incrementRandomInt",
      
    }),
  },
};
</script>
<style></style>
