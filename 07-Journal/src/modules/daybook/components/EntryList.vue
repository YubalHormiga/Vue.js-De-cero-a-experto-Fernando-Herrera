<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input v-model="term" type="text" class="form-control" placeholder="Buscar Entradas" />
    </div>
    <div class="entries-scrollarea">
      <Entry 
      v-for="entry in entriesByTerm" 
      :key="entry.id"
      :entry = "entry"
      />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import {mapGetters} from 'vuex'

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
  computed:{
    ...mapGetters('journal',['getEntriesByTerm']),// primero el nombre del modulo que nos interesa
                                                // segundo lo que nos interesa
    entriesByTerm(){
      return this.getEntriesByTerm(this.term)
    }
  },
  data() {
    return {
      term: ''
    }
  },

};
</script>
<style lang="scss" scoped>
input {
  height: 25px;
}
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entries-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
