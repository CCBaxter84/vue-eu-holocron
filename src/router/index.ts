import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Author from "../views/Author.vue";
import Book from "../views/Book.vue";
import NewAuthor from "../views/NewAuthor.vue";
import NewBook from "../views/NewBook.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/authors/new",
    name: "NewAuthor",
    component: NewAuthor,
  },
  {
    path: "/books/new",
    name: "NewBook",
    component: NewBook,
  },
  {
    path: "/authors/:id",
    name: "Author",
    component: Author,
  },
  {
    path: "/books/:id",
    name: "Book",
    component: Book,
  },
  {
    path: "/authors",
    name: "Authors",
    component: () => import("../views/Authors.vue"),
  },
  {
    path: "/books",
    name: "Books",
    component: () => import("../views/Books.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
