import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueParticles from "vue-particles";
import "./assets/fonts/Oswald-VariableFont_wght.ttf";
import "./assets/styles.css";

Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
