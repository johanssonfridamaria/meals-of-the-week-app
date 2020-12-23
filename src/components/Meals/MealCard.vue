<template>
    <div class="meal-card d-flex column" :class="{dark: darkTheme }">
      <h1>{{ meal.name }}</h1>
      <div>
      <button class="btn round-btn d-flex" @click="delMeal(meal)"><i class="fas fa-minus"></i></button>
      <button v-if="meal.menu" class="btn round-btn d-flex" @click="addToMenu(meal)"><i class="fas fa-plus"></i></button>
      <button v-else class="btn round-btn d-flex" @click="addToMenu(meal)"><i class="fas fa-check"></i></button>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MealCard',
  props: ['meal', 'id'],
  computed: {
    ...mapGetters(['darkTheme'])
  },
  methods: {
    ...mapActions(['delMeal', 'addToMenu'])
  },
};
</script>

<style scoped>
.meal-card {
  max-width: 40rem;
  margin: 2rem auto;
  padding: 1rem;
  border: 0.2rem solid black;
  border-radius: 1rem;
}
.round-btn{
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.3rem;
  padding: 0;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  }

</style>
