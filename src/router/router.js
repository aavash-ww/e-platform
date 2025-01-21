import { createRouter, createMemoryHistory } from "vue-router";

import Homepage from "../pages/Homepage.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/",
    component: Homepage,
    name: "Homepage",
  },
  {
    path: "/contact",
    component: Contact,
    name: "Contact",
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
