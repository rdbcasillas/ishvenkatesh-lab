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

<style>
.v-main.app-main,
.v-main.app-main > .v-main__wrap {
  background-color: var(--color-bg) !important;
  padding-top: 64px !important;
}

@media (max-width: 991px) {
  .v-main.app-main,
  .v-main.app-main > .v-main__wrap {
    padding-top: 62px !important;
  }
}
</style>
