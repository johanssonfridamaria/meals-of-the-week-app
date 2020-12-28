<template>
  <div class="mx-1 meal-card">
    <div class=" d-flex row meal-content">
      <h1 class="text-center">{{ meal.name }}</h1>
      <!-- <div> -->
      <button class="btn round-btn d-flex" @click="delFromMenu(meal)">
        <i class="fas fa-minus"></i>
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MealInMenu',
  props: ['meal', 'id'],
  methods: {
    ...mapActions(['delFromMenu']),
  },
};
</script>

<style scoped>
.meal-card {
  max-width: 40rem;
  padding: 1rem;
  border: 0.1rem solid transparent;
  border-radius: 1rem;
  background: #f9f9f9;
  color: #111;
  align-items: center;
}
.round-btn {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.3rem;
  padding: 0;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
}
.meal-content{
  align-items: center;
}
</style>
