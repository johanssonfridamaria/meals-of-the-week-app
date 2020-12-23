<template>
  <div>
    <h1>This weeks menu</h1>
    <div class="d-flex row-wrap">
      <mealCard v-for="(meal, index) in thisWeeksMenu" :key="index" :meal="meal" :id="index" />
    </div>
  </div>
</template>

<script>
import MealCard from '../components/Meals/MealCard';
import { mapGetters } from 'vuex';

export default {
  name: 'ThisWeeksMenu',
  components: {
    MealCard,
  },
  // methods: {
  //   ...mapActions(['randomMeal'])
  // },
  computed: {
    ...mapGetters(['thisWeeksMenu', 'randomMeal']),
  },
};
</script>

<style scoped>
</style>
