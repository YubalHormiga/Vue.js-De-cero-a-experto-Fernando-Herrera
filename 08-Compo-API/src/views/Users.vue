<script setup>
import useUsers from "../composables/useUsers.js";

const { users, isLoading, currentPage, errorMsg, nextPage, prevPage } =
  useUsers();

</script>

<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMsg">{{ errorMsg }}</h5>
  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, email, id } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>
  <button @click="prevPage" :disabled="currentPage <= 1">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Página:{{ currentPage }}</span>
</template>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 250px;
}
</style>
