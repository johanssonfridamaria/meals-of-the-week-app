<template>
  <div>
    <navbar />
    <div class="container">
      <router-view />
    </div>
    <appFooter />
  </div>
</template>

<script>
import Navbar from './components/Navigation/Navbar';
import AppFooter from './components/Navigation/AppFooter';

export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter,
  },
};
</script>

<style>
</style>
