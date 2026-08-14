<template>
  <v-app>
    <Navigation />
    <v-main class="app-main">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
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

<style scoped>
.app-main {
  padding-top: 66px;
}

@media (max-width: 600px) {
  .app-main {
    padding-top: 58px;
  }
}
</style>
