import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/login",
    alias: "/login",
    name: "login",
    component: () => import("./components/Login")
  },
  {
    path: "/dashboard",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("./components/Dashboard")
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
  },
  {
    path: "/hotel_list",
    alias: "/hotel_list",
    name: "hotel_list",
    component: () => import("./components/Hotel/List")
  },
  {
    path: "/add_hotel",
    alias: "/add_hotel",
    name: "add_hotel",
    component: () => import("./components/Hotel/Create")
  },
  {
    path: "/edit_hotel/:id",
    alias: "/edit_hotel",
    name: "edit_hotel",
    component: () => import("./components/Hotel/Edit")
  },



  {
    path: "/room_list/:id",
    alias: "/room_list",
    name: "room_list",
    component: () => import("./components/Room/List")
  },
  {
    path: "/add_room/:id",
    alias: "/add_room",
    name: "add_room",
    component: () => import("./components/Room/Create")
  },
  {
    path: "/edit_room/:id",
    alias: "/edit_room",
    name: "edit_room",
    component: () => import("./components/Room/Edit")
  },



  {
    path: "/booking_list/:id",
    alias: "/booking_list",
    name: "booking_list",
    component: () => import("./components/Booking/List")
  },
  {
    path: "/add_booking/:id",
    alias: "/add_booking",
    name: "add_booking",
    component: () => import("./components/Booking/Create")
  },
  {
    path: "/edit_booking/:id",
    alias: "/edit_booking",
    name: "edit_booking",
    component: () => import("./components/Booking/Edit")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;