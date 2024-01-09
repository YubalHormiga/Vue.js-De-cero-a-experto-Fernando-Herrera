<script setup>
import { ref, reactive } from "vue";

const ironman = ref({ name: "Tony", age: 50 });
const hulk = reactive({ name: "Bruce", age: 50 });

const changeIronman = () => {
  ironman.value.name = "Tony Stark";
  ironman.value.age = 45;
};
const changeHulk = () => {
  hulk.name = "Bruce Banner";
  hulk.age = 35;
};

const ironmanIsAlive = reactive(false);
const hulkIsAlive = ref(true);

const changeStatus = ()=>{
  hulkIsAlive.value = !hulkIsAlive.value
}

</script>
<template>
  <div class="home">
    <h1>Reactive&Ref</h1>
    <h3>Ironman: {{ ironman }}</h3>
    <h3>Hulk: {{ hulk }}</h3>
    <button @click="changeIronman">changeIronman</button>
    <button @click="changeHulk">changeHulk</button>
    <h3>{{ ironmanIsAlive }}</h3>
    <h3>{{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Change Status</button>
  </div>
</template>
