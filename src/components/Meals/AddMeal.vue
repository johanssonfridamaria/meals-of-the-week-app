<template>
  <div class="d-flex column section">
    <h2 class="text-center mb-1">Don't see anything you like? Add meals:</h2>
    <form @submit="add" class="input-group d-flex column">
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="Insert name of meal"
      />
      <button class="btn btn-add" type="submit">Add</button>
    </form>
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
input {
  padding: 0.7rem 0.7rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  outline: none;
  background: #eee;
  color: #333;
  margin-bottom: 1rem;
  width: 100%;
}
.btn-add {
  border-radius: 0.5rem;
}
.input-group {
  width: 100%;
  justify-content: center;
}
@media (min-width: 592px) {
  .input-group {
    flex-direction: row;
    max-width: 40rem;
  }
  input {
    border-radius: 0.5rem 0 0 0.5rem;
    margin-bottom: 0;
  }
  .btn-add {
    border-radius: 0 0.5rem 0.5rem 0;
  }
}
</style>