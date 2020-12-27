<template>
  <nav class="navbar d-flex column">
    <h1>What shall we eat this week?</h1>
    <div class="links d-flex row">
      <router-link class="nav-link" to="/">Meals</router-link>
      <router-link class="nav-link" to="/menu">This weeks menu</router-link>
    </div>
    <button class="btn" @click="setTheme()" >Change theme</button>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['setTheme'])
  },

};
</script>

<style scoped>
.navbar {
  background-color: beige;
  padding: 1rem 0;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  color: #333;
  margin-left: 3rem;
  font-size: 1rem;
}
@media (max-width: 768px) {
  /* .links{
    flex-direction: column;
  }
  .nav-link{
    margin-bottom: 1rem;
  } */
}
</style>