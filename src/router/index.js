import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Publications from "../views/Publications.vue";
import Funding from "../views/Funding.vue";
import Team from "../views/Team.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/publications",
    name: "Publications",
    component: Publications,
  },
  {
    path: "/funding",
    name: "Funding",
    component: Funding,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
