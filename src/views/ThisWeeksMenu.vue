<template>
  <div>
    <h1>This weeks menu</h1>
    <div class="d-flex row-wrap">
      <div v-if="!menu">
        <h2>You have not added any meals yet</h2>
      </div>
      <mealCard v-else
        v-for="meal in menu"
        :key="meal.id"
        :meal="meal"
        @minusClick="delFromMenu(meal.id)"
      />
    </div>
  </div>
</template>

<script>
import MealCard from '../components/Meals/MealCard';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ThisWeeksMenu',
  components: {
    MealCard,
  },
  methods: {
    ...mapActions(['delFromMenu']),
  },
  computed: {
    ...mapGetters(['menu', 'randomMeal']),
  },
};
</script>

<style scoped>
</style>
