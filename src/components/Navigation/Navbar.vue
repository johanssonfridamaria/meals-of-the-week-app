<template>
  <nav class="navbar">
    <div class="container">
      <router-link class="nav-link" to="/">LOGO</router-link>
      <div class="">
        <router-link class="nav-link" to="/">Meals</router-link>
        <router-link class="nav-link" to="/menu">This weeks menu</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar{
  background-color: beige;
  padding: 1rem 0;
}
.nav-link {
  text-decoration: none;
  color: #333;
}
</style>