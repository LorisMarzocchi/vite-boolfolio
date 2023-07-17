import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import ProjectIndex from "./pages/ProjectIndex.vue";
import ProjectsShow from "./pages/ProjectsShow.vue";

// importa i componenti che definiscono le varie pagine

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects.index",
      component: ProjectIndex,
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: ProjectsShow,
    },
  ],
});

export { router };
