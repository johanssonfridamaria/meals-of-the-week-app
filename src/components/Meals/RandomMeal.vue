<template>
  <div class="d-flex column section">
    <h2 class="mb-1">Difficult to choose?</h2>
    <button @click="addRandom" class="btn">Add a random meal!</button>
  </div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
name: 'RandomMeal',
methods: {
    ...mapActions(['addRandom'])
  },
};


</script>

<style scoped>
</style>