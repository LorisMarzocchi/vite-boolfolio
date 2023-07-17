<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import { store } from "../store";
export default {
  data() {
    return {
      arrProjects: [],
      currentPage: 1,
      nPages: 0,
      store,
    };
  },
  components: {
    ProjectCard,
  },
  methods: {
    clickNext() {
      if (this.currentPage < this.nPages) {
        this.currentPage++;
        this.getProject();
      }
    },
    clickBefore() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getProject();
      }
    },
    changePage(page) {
      this.currentPage = page;
      this.getProject();
    },
    getProject() {
      axios
        .get(this.store.baseUrl + "api/posts", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.arrProjects = response.data.data;
          this.nPages = response.data.last_page;
        });
    },
  },
  created() {
    // richiesta dati al server
    this.getPosts();
  },
  watch: {
    currentPage() {
      this.getPosts();
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>The projects</h2>
    <ul>
      <li v-for="project in arrProjects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>

    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" @click="clickBefore()">Previous</a>
        </li>

        <li
          v-for="page in nPages"
          :key="page"
          class="page-item"
          :class="{ active: page == currentPage }"
        >
          <span class="page-link" @click="changePage(page)">
            {{ page }}
          </span>
        </li>

        <li class="page-item">
          <a class="page-link" href="#" @click="clickNext()">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
    <div class="col" v-for="project in arrProjects" :key="project.id">
      <PostCard :dataProject="project" />
    </div>
  </div>
</template>

<style></style>
