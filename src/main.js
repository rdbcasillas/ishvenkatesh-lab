import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./assets/styles.css";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueGtag from "vue-gtag";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueGtag, {
  config: { id: "G-F84NDYL2Y4" },
}, router);
Vue.config.productionTip = false;

// Third-party social-media embeds can trigger this harmless browser notification
// while they calculate their own dimensions. It is not an application error, but
// webpack-dev-server otherwise displays it as a blocking error overlay.
window.addEventListener(
  "error",
  (event) => {
    const message = event.message || "";
    if (
      message.includes("ResizeObserver loop completed with undelivered notifications") ||
      message.includes("ResizeObserver loop limit exceeded")
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  },
  true
);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
