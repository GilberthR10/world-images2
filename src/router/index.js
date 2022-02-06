import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Sellers from "../views/Sellers.vue";
import ErrorPage from "../views/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vendedores",
    name: "Sellers",
    component: Sellers,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorPage",
    component: ErrorPage,
  }  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
