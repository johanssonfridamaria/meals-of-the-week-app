<template>
  <div>
    <h1 class="mb-1">Meals</h1>
    <div class="my-1">
      <h3>Difficult to choose?</h3>
      <h3>
        Click on the button and you'll get a random meal added to the menu
      </h3>
      <button class="btn">Help me choose!</button>
    </div>
    <div class="my-1">
      <add-meal />
    </div>

    <div></div>
    <h3>Select meals to this weeks menu</h3>
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

export default {
  name: 'Meals',
  components: {
    MealCard,
    AddMeal,
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
/* .meal-container{
  justify-content: center;
} */
</style>
