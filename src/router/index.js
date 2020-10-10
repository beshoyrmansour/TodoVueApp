import Vue from "vue";
import VueRouter from "vue-router";
import AllTodos from "../views/AllTodos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: AllTodos
    // path: "/",
    // name: "All",
    // component: AllTodos,
  },
  {
    path: "/incomplete",
    name: "Incomplete",
    component: () =>
      import(/* webpackChunkName: "Incomplete" */ "../views/Incomplete.vue"),
  },
  {
    path: "/completed",
    name: "Completed",
    component: () =>
      import(/* webpackChunkName: "Completed" */ "../views/Completed.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
