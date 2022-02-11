<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/navigation/Navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
