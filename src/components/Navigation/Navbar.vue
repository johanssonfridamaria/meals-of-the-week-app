<template>
  <nav class="navbar d-flex column" :class="{navbarDark:darkTheme}">
    <h1>What shall we eat this week?</h1>
    <div class="d-flex row my-1" >
      <router-link class="nav-link" :class="{navbarDark:darkTheme}" to="/">Meals</router-link>
      <router-link class="nav-link" :class="{navbarDark:darkTheme}" to="/menu">This weeks menu</router-link>
    </div>
    <button v-if=!darkTheme class="btn btn-theme" @click="setTheme()"><i class="fas fa-sun"></i></button>
    <button v-else class="btn btn-theme" @click="setTheme()"><i class="fas fa-moon"></i></button>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['setTheme'])
  },
  computed: {
    ...mapGetters(['darkTheme'])
  }

};
</script>

<style scoped>
.navbar {
  background-color:#53785A;
  padding: 1rem 0;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  color: #333;
  margin-left: 3rem;
  font-size: 1rem;
}
.navbarDark{
  color: #fff;
}
.btn-theme{
  background: transparent;
}
</style>