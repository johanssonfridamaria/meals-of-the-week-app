<template>
  <div>
    <div class="section">
      <h1 class="mb-1 text-center">Meals</h1>
      <h3 class="text-center">Select meals bellow to This Weeks Menu</h3>
    </div>
    <div class="cards d-flex column">
      <add-meal />
    </div>
    <div class="d-flex meal-container">
      <mealCard
        v-for="meal in meals"
        :key="meal.id"
        :meal="meal"
      />
    </div>
  </div>
</template>

<script>
import MealCard from '../components/Meals/MealCard';
import { mapGetters } from 'vuex';
import AddMeal from '../components/Meals/AddMeal.vue';

export default {
  name: 'Meals',
  components: {
    MealCard,
    AddMeal,
  },
  computed: {
    ...mapGetters(['meals', 'isDarkTheme']),
  },
};
</script>

<style scoped>
.meal-container {
  flex-direction: column;
  justify-content: center;
}
.cards{
  margin-bottom: 2rem;
}

@media (min-width: 592px) {
  .meal-container {
    flex-flow: row wrap;
  }
}
</style>
