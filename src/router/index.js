import LoginFormVue from "@/components/LoginForm.vue";
import HomeViewVue from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import Guard from "../services/middleware";
const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginFormVue,
  },
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
  },
  {
    path: "/about",
    name: "about",
    beforeEnter: Guard.auth,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
