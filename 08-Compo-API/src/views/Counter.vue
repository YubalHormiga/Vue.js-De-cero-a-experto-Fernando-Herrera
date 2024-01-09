<script setup>
import useCounter from "@/composables/useCounter.js";

const { increase, decrease, counter } = useCounter(25);
// import { ref } from "vue";

// const counter = ref(6);

// const increase = () => counter.value++;
// const decrease = () => counter.value--;
</script>

<template>
  <h1>Counter View</h1>
  <h2>{{ counter }}</h2>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>
<style scoped></style>
