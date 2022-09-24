import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Publications from "../views/Publications.vue";
import Funding from "../views/Funding.vue";
import Team from "../views/Team.vue";
import Positions from "../views/Positions.vue";
import Contact from "../views/Contact.vue";
import Gallery from "../views/Gallery.vue";
import Resources from "../views/Resources.vue";

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
  {
    path: "/positions",
    name: "positions",
    component: Positions,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
  },
  {
    path: "/resources",
    name: "resources",
    component: Resources,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
