import { required } from 'yargs';
<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
  </h1>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
    //   id: this.$route.params.id
    };
  },
  created() {
    // console.log(this.$route)
    // const { id } = this.$route.params;
    // console.log(id);
    // this.id = id;
  },
};
</script>
