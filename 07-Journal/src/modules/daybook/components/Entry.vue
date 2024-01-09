<template>
  <div
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
    class="entry-container mb-3 pointer p-2"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{day}}</span>
      <span class="mx-1 fs-5">{{month}}</span>
      <span class="mx-2 fw-light">{{yearDay}}</span>
    </div>
    <div class="entries-description">
      {{ shortText }}
    </div>
  </div>
</template>
<script>

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {
  props: {
    entry: {
      typeof: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      if (this.entry.text.length > 130) {
        return this.entry.text.substring(0, 130) + "...";
      } else {
        return this.entry.text;
      }
    },
    day(){
      const date = new Date(this.entry.date)
      return date.getDate()
    },
    month(){
      const date = new Date(this.entry.date)
      return months[date.getMonth()]
    },
    yearDay(){
      const date = new Date(this.entry.date)
      return `${date.getFullYear()}, ${days[date.getDay()]}`
    }
  },
};
</script>
<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entries-description {
    font-size: 13px;
  }
}
</style>
