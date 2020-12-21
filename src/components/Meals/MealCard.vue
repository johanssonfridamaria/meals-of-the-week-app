<template>
    <div class="meal-card d-flex column">
      <h1>{{ meal.index }}</h1>
      <h1>{{ meal.name }}</h1>
      <div>
      <button class="btn">Remove</button>
      <button class="btn">Add</button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'MealCard',
  props: ['meal']
};
</script>

<style scoped>
.meal-card {
  max-width: 40rem;
  margin: 2rem auto;
  padding: 1rem;
  border: 0.2rem solid black;
}

</style>
