<script setup>
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
} from "vue";

const title = ref("About Page");

const changeTitle = ()=> title.value = 'New Page'



console.log("se llamo");
onMounted(() => {
  console.log("onMounted");
});
onUpdated(() => {
  console.log("onUpdated");
});
onUnmounted(() => {
  console.log("onUnmounted");
});
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
onErrorCaptured(() => {
  console.log("onErrorCaptured");
});
onRenderTracked(() => {
  console.log("onRenderTracked");
});
onRenderTriggered(() => {
  console.log("onRenderTriggered");
});
onActivated(() => {
  console.log("onActivated");
});
onDeactivated(() => {
  console.log("onDeactivated");
});
</script>

<template>
  <div class="about">
    <h1>{{title}}</h1>
  </div>
  <button @click="changeTitle">Change Title</button>
</template>
<style scoped></style>
