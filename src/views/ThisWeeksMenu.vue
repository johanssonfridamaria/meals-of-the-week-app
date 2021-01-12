<template>
  <div class="d-flex menu-container column">
    <div class="d-flex column mb-1">
      <div class="section">
        <h1 class="mb-1 text-center">This Weeks Menu</h1>
        <h3 class="text-center">
          Go to
          <router-link
            class="link"
            :class="{ 'text-dark': isDarkTheme }"
            to="/meals"
          >
            Meals
          </router-link>
          to find meals to add to the menu
        </h3>
      </div>

      <random-meal />
    </div>

    <div class="d-flex column menu">
      <div class="menu-row" v-for="meal in menu" :key="meal.id">
        <div v-if="!menu">
          <h2>You have not added any meals yet</h2>
        </div>
        <mealInMenu v-else :meal="meal" />
      </div>
      <div class="menu-row"></div>
      <div class="menu-row"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MealInMenu from '../components/Meals/MealInMenu.vue';
import RandomMeal from '../components/Meals/RandomMeal.vue';

export default {
  name: 'ThisWeeksMenu',
  components: {
    MealInMenu,
    RandomMeal,
  },
  computed: {
    ...mapGetters(['menu', 'randomMeal']),
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #53785a;
  font-size: 1rem;
  cursor: pointer;
}
.menu-container {
  align-items: center;
}
.menu {
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 10px 0 #333;
  padding: 1rem 2rem 2rem 2rem;
  color: #000;
  width: 100%;
  max-width: 40rem;
}
.menu-row {
  height: 4.5rem;
  border-bottom: 0.2rem solid #000;
  display: flex;
  align-content: center;
  align-items: center;
}
/* .menu-row h1{
  text-align: center;
} */
</style>
