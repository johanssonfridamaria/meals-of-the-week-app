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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, html{
  height: 100%;
}
.container{
  width: 80%;
  margin: auto;
}
.d-flex{
  display: flex;
}

</style>
