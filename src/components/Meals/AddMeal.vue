<template>
  <div>
    <label for="name">Name on meal</label>
    <input type="text" id="name" v-model="name" />
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