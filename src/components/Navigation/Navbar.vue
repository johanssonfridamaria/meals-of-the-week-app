<template>
  <nav class="navbar d-flex column" :class="{'text-dark': isDarkTheme }">
    <h1 class="text-center">What shall we eat this week?</h1>
    <div class="d-flex row my-1"  >
      <router-link class="nav-link" to="/" :class="{'text-dark': isDarkTheme, 'text-light': !isDarkTheme }">
        This Weeks Menu
      </router-link>
      <router-link
        class="nav-link ml-3"
        :class="{'text-dark': isDarkTheme, 'text-light': !isDarkTheme }"
        to="/meals"
        >Meals
      </router-link>
    </div>
    <button v-if="isDarkTheme" class="btn btn-theme" @click="setTheme()">
      <i class="fas fa-sun"></i>
    </button>
    <button v-else class="btn btn-theme" @click="setTheme()">
      <i class="fas fa-moon"></i>
    </button>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['setTheme']),
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
  },
};
</script>

<style scoped>
.navbar {
  background-color: #53785a;
  padding: 1rem 2rem;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  font-size: 1rem;
}
.btn-theme {
  background: transparent;
}
</style>