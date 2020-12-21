<template>
  <div>
    <h1>Meals</h1>
    <h2>Choose meals to add to this weeks menu</h2>
    <h2>Difficult to choose? Click on this button to get a random meal added to this weeks menu</h2>
    <button class="btn">Choose for me!</button>
    <div class="d-flex row-wrap">
    <mealCard v-for="(meal, index) in meals" :key="index" :meal="meal"/>
    </div>
  </div>
</template>

<script>
import MealCard from '../components/Meals/MealCard'
import { mapGetters } from 'vuex';

export default {
  name: 'Meals',
  components: {
    MealCard,
  },
  computed: {
    ...mapGetters(['meals']),
  },

};
</script>

<style scoped>

</style>
