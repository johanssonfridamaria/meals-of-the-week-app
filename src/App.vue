<template>
  <div>
    <navbar />
    <div :class="[ {dark: isDarkTheme, light: !isDarkTheme}]" class="pt-1 main">
      <div class="container">
        <router-view />
      </div>
    </div>
    <appFooter />
  </div>
</template>

<script>
import Navbar from './components/Navigation/Navbar';
import AppFooter from './components/Navigation/AppFooter';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter,
  },
  methods: {
    ...mapActions(['getMeals']),
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
  },
  created() {
    this.getMeals();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  height: 100%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.container {
  width: 80%;
  margin: auto;
}
.d-flex {
  display: flex;
}
.column {
  flex-direction: column;
}
.row {
  flex-direction: row;
}
.row-wrap {
  flex-flow: row wrap;
}
.text-center {
  text-align: center;
}

h1 {
  font-family: 'Amatic SC', cursive;
  font-size: 2.5rem;
}
h2 {
  font-family: 'Amatic SC', cursive;
  font-size: 2rem;
}
h3 {
  margin-bottom: 0.5rem;
  font-size: 1rem
}
.btn {
  background: #53785a;
  border: 0.1rem solid transparent;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  color: #fff;
}
.round-btn {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.3rem;
  padding: 0;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
}

/* Margin & Padding */
.mb-1 {
  margin-bottom: 1rem;
}
.mt-1 {
  margin-top: 1rem;
}
.ml-3 {
  margin-left: 3rem;
}
.my-1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.mx-1 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.pb-1 {
  padding-bottom: 1rem;
}
.pt-1 {
  padding-top: 1rem;
}

/* Main container */
.main {
  min-height: calc(100vh - (71.11px + 172.08px));
}

/* DarkTheme */
.dark {
  background: #314735;
  color: #fff;
}
.light {
  background: #f4f5f4;
   color: #333;
}
.text-dark {
  color: #fff;
}
</style>
