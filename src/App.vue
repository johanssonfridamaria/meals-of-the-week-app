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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.container{
  width: 80%;
  margin: auto;
}
.d-flex{
  display: flex;
}
.column{
  flex-direction: column;
}
.row{
  flex-direction: row;
}
.row-wrap{
  flex-flow: row wrap;
}
h1{
  font-family: 'Amatic SC', cursive;;
}
.btn{
  background: black;
  border: 0.1rem solid transparent;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  color: white;
}

</style>
