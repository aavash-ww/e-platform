import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";


const routes = [
  {
    path: "/",
    component: defineAsyncComponent(() => import('../pages/Homepage.vue')) ,
    name: "Homepage",
  },
  {
    path: "/contact",
    component: defineAsyncComponent(() => import('../pages/Contact.vue')),
    name: "Contact",
  },
  {
    path: "/about",
    component: defineAsyncComponent(() => import('../pages/About.vue')),
    name: "About",
  },
  {
    path: "/register",
    component: defineAsyncComponent(() => import('../pages/Register.vue')),
    name: "Register",
  },
  {
    path: "/login",
    component: defineAsyncComponent(() => import('../pages/Login.vue')),
    name: "Login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
