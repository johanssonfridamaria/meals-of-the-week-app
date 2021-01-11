<template>
  <div>
    <h1 class="mb-1 text-center">Meals</h1>
    <h3 class="text-center">Select meals bellow to This Weeks Menu</h3>
    <div class="my-1">
      <random-meal />
      <add-meal />
    </div>
    <div class="d-flex row-wrap pb-1">
      <mealCard
        v-for="meal in meals"
        :key="meal.id"
        :meal="meal"
        @minusclick="delMeal(meal.id)"
      />
    </div>
  </div>
</template>

<script>
import MealCard from '../components/Meals/MealCard';
import { mapGetters, mapActions } from 'vuex';
import AddMeal from '../components/Meals/AddMeal.vue';
import RandomMeal from '../components/Meals/RandomMeal.vue';

export default {
  name: 'Meals',
  components: {
    MealCard,
    AddMeal,
    RandomMeal,
  },
  methods: {
    ...mapActions(['delMeal']),
  },
  computed: {
    ...mapGetters(['meals', 'randomMeal', 'isDarkTheme']),
  },
};
</script>

<style scoped>
</style>
