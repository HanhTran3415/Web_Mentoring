<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/users/navigations/Footer.vue';
import NavBar from './components/users/navigations/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
};
</script>

<style scoped>
/* Ensure no global styles affect the layout */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  min-height: 100vh; /* Ensure the app takes at least the full height of the viewport */
  display: flex;
  flex-direction: column;
}

router-view {
  flex: 1; /* Allow router-view to take up available space */
}
</style>
