<template>
  <div>
    Meals
    <div class="meal-card" v-for="(meal, index) in meals" :key="index">
      <h1>{{ meal.index }}</h1>
      <h1>{{ meal.name }}</h1>
      <button class="btn">Remove</button>
      <button class="btn">Add to "This weeks menu"</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Meals',
  // components: {},
  // methods: {},
  computed: {
    ...mapGetters(['meals']),
  },
  // created(){

  // }
};
</script>
