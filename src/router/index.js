import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Publications from "../views/Publications.vue";
import Explorables from "../views/Explorables.vue";
import ExplorableViewer from "../views/ExplorableViewer.vue";
import Funding from "../views/Funding.vue";
import Awards from "../views/Awards.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";
import SocialMedia from "../views/SocialMedia.vue";
import Press from "../views/Press.vue";
import PressStory from "../views/PressStory.vue";
import LabRetreat from "../views/LabRetreat.vue";
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
    path: "/press",
    name: "Press",
    component: Press,
  },
  {
    path: "/press/:slug",
    name: "PressStory",
    component: PressStory,
  },
  {
    path: "/news",
    redirect: "/press",
  },
  {
    path: "/explorables",
    name: "Explorables",
    component: Explorables,
  },
  {
    path: "/explorables/:slug",
    name: "ExplorableViewer",
    component: ExplorableViewer,
  },
  {
    path: "/funding",
    name: "Funding",
    component: Funding,
  },
  {
    path: "/awards",
    name: "Awards",
    component: Awards,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/social-media",
    name: "social-media",
    component: SocialMedia,
  },
  {
    path: "/lab-retreat",
    name: "lab-retreat",
    component: LabRetreat,
  },
  {
    path: "/resources",
    name: "resources",
    component: Resources,
  },
  {
    path: "/training",
    name: "Training",
    component: () => import("../views/Training.vue"),
  },
  {
    path: "/dashboard",
    redirect: "/training",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, offset: { x: 0, y: 72 }, behavior: "smooth" };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
