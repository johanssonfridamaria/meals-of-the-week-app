<template>
  <div class="container pt-1">
    <h1 class="mb-1">Meals</h1>
    <h3>Difficult to choose?</h3>
    <h3>Click on the button and you'll get a random meal added to the menu</h3>
    <button class="btn">Help me choose!</button>
    <h2>Choose meals to add to this weeks menu</h2>
    <add-meal />

    <h2>Select meals to this weeks menu</h2>
    <div class="d-flex row-wrap pb-1">
      <mealCard v-for="(meal, index) in meals" :key="index" :meal="meal" :id="index" />
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
  // methods: {
  //   ...mapActions(['randomMeal'])
  // },
  computed: {
    ...mapGetters(['meals', 'randomMeal', 'darkTheme']),
  },
};
</script>

<style scoped>
/* .meal-container{
  justify-content: center;
} */
</style>
