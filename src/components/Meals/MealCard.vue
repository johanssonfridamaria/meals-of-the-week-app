<template>
    <div class="meal-card d-flex column">
      <h1>{{ meal.name }}</h1>
      <div>
      <button class="btn" @click="delMeal(meal)">Remove</button>
      <button class="btn" @click="addToMenu(meal)">Add</button>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MealCard',
  props: ['meal', 'id'],
  methods: {
    ...mapActions(['delMeal', 'addToMenu'])
  }
};
</script>

<style scoped>
.meal-card {
  max-width: 40rem;
  margin: 2rem auto;
  padding: 1rem;
  border: 0.2rem solid black;
}

</style>
