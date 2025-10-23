import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/room",
    alias: "/room",
    name: "room",
    component: () => import("./components/Room")
  },
  {
    path: "/book_room",
    alias: "/book_room",
    name: "book_room",
    component: () => import("./components/Book_room")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;