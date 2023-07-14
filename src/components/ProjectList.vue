<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
export default {
  components: {
    AppCard,
  },
  data() {
    return {
      arrProjects: [],
      currentPage: 1,
      nPages: 0,
    };
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
        .get("http://localhost:8000/api/projects", {
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
    axios
      .get("http://localhost:8000/api/projects", {
        params: {
          page: this.currentPage,
        },
      })
      .then((response) => {
        this.arrProjects = response.data.data;
        this.nPages = response.data.last_page;
      });
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
  <div class="container">
    <AppCard :DataCard="this.arrProjects" />
  </div>
</template>

<style></style>
