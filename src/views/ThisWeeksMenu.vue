<template>
  <div class="container">
    <h1>This weeks menu</h1>
    <div class="d-flex row-wrap">
      <mealInMenu v-for="(meal, index) in thisWeeksMenu" :key="index" :meal="meal" :id="index" />
    </div>
  </div>
</template>

<script>
import MealInMenu from '../components/Meals/MealInMenu';
import { mapGetters } from 'vuex';

export default {
  name: 'ThisWeeksMenu',
  components: {
    MealInMenu,
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
