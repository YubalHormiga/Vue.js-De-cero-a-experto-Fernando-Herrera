<template>
  <button class="btn btn-primary">
    <i :class="icon" class="fa fa-2x"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 20px;
  height: 80px;
  position: fixed;
  right: 80px;
}
</style>
