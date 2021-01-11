<template>
  <div class="d-flex meal">
    <h2>{{ meal.name }}</h2>
    <div>
      <button class="btn round-btn d-flex" @click="delFromMenu(meal.id)">
        <i class="fas fa-minus"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MealInMenu',
  props: ['meal', 'id'],
  methods: {
    ...mapActions(['delFromMenu']),
  },
};
</script>

<style scoped>
.meal {
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color:black;
  margin: 0 0.7rem;
}
</style>
