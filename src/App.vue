<template>
  <v-app>
    <Navigation />
    <v-main class="app-main">
      <router-view></router-view>
    </v-main>
    <SiteFooter />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",

  components: {
    Navigation,
    SiteFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-main.app-main {
  background-color: var(--color-bg) !important;
  padding-top: var(--nav-h) !important;
}

.v-main.app-main > .v-main__wrap {
  background-color: var(--color-bg) !important;
  padding-top: 0 !important;
}
</style>
