import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueParticles from "vue-particles";
import "./assets/fonts/Oswald-VariableFont_wght.ttf";
import "./assets/styles.css";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueGtag from "vue-gtag";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueParticles);
Vue.use(VueGtag, {
  config: { id: "UA-113483747-2" },
});
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
