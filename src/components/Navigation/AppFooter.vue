<template>
  <footer class="footer" :class="{footerDark:isDarkTheme}">
    <div class="container text-center">
      <p>Copyright © 2020 Frida Johansson</p>
      <p>School project @ Lexicon Yrkesutbildning</p>
    </div>
  </footer>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Footer',
   computed: {
    ...mapGetters(['isDarkTheme'])
  }
};
</script>

<style scoped>
footer {
  background-color:#53785A;
  padding: 1.5rem 1rem;
}
.footerDark{
  color: #fff;
}
</style>