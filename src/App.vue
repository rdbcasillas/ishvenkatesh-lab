<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import particlesJS from "./components/ParticlesJS";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped></style>
