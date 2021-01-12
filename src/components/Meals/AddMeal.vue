<template>
  <div class="d-flex column section">
    <h2 class="text-center mb-1">Don't see anything you like? Add meals:</h2>
    <div class="input-group d-flex">
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="Insert name of meal"
      />
      <button class="btn" @click="add">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    ...mapActions(['addMeal']),
    add() {
      if (this.name !== '') {
        this.addMeal(this.name);
        this.name = '';
      }
    },
  },
};
</script>

<style scoped>

</style>