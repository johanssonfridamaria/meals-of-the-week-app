<template>
  <div>
    <h3>Don't see anything you like? Add meals:</h3>
    <input type="text" id="name" v-model="name" placeholder="Insert name of meal" />
    <button class="btn" @click="add">Add</button>
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
      if (this.name != '') {
        this.addMeal(this.name);
        this.name = '';
      }
    },
  },
};
</script>

<style>
</style>