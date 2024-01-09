<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>
    <Button v-on:click="goToDaybook" class="btn btn-primary">Primary</Button>
    <Button v-on:click="goToDaybook" class="btn btn-secondary">Secondary</Button>
    <Button v-on:click="goToDaybook" class="btn btn-success">Success</Button>
  </div>
</template>

<script>
export default {
  methods:{
    goToDaybook(){
      // this.$router.push({name:'daybook'})
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>


