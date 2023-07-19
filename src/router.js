import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import ProjectIndex from "./pages/ProjectIndex.vue";
import ProjectsShow from "./pages/ProjectsShow.vue";
import AppContact from "./pages/AppContact.vue";

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
      path: "/about",
      name: "about",
      component: AppAbout,
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
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "page404",
    //   component: App404,
    // },
    {
      path: "/contact",
      name: "contact",
      component: AppContact,
    },
  ],
});

export { router };
