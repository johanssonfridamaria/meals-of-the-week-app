<template>
  <div class="mx-1 meal-card mb-1">
    <div class="d-flex row meal-body">
      <h1 class="text-center">{{ meal.name }}</h1>
      <div class="d-flex">
        <button
          class="btn round-btn d-flex"
          @click="$emit('minusclick', meal.id)"
        >
          <i class="fas fa-minus"></i>
        </button>
        <button
          v-if="!isAdded(meal.id)"
          class="btn round-btn d-flex"
          @click="addToMenu(meal)"
        >
          <i class="fas fa-plus"></i>
        </button>
        <button
          v-else
          class="btn round-btn d-flex"
          @click="delFromMenu(meal.id)"
        >
          <i class="fas fa-check"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MealCard',
  props: ['meal', 'added'],
  computed: {
    ...mapGetters(['isAdded']),
  },
  methods: {
    ...mapActions(['addToMenu', 'delFromMenu']),
  },
};
</script>

<style scoped>
.meal-card {
  max-width: 40rem;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 5px 5px 10px 0 #333;
  background: #ccc;
  color: #333;
  align-items: center;
}
.meal-body {
  align-items: center;
  justify-content: space-between;
}
</style>
