<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import { store } from "../store";

export default {
  components: { ProjectCard },
  data() {
    return {
      arrProjects: [],
      arrTypes: [],
      currentPage: 1,
      nPages: 0,
      activePage: 1,
      store,
    };
  },
  methods: {
    // changePage(page) {
    //   this.currentPage = page;
    //   this.getProjects();
    // },
    nextPage() {
      this.currentPage != this.nPages ? this.currentPage++ : null;
      console.log(this.currentPage);
    },
    prevPage() {
      this.currentPage != 1 ? this.currentPage-- : null;
      console.log(this.currentPage);
    },
    getProjects() {
      axios
        .get(this.store.baseUrl + "api/projects", {
          params: {
            page: this.currentPage,
            q: new URLSearchParams(window.location.search).get("q"),
          },
        })
        .then((response) => {
          this.arrProjects = response.data.results.data;
          this.nPages = response.data.results.last_page;
        });
    },
    getTypes() {
      axios.get(this.store.baseUrl + "api/types").then((response) => {
        this.arrTypes = response.data.results;
      });
    },
  },
  created() {
    // richiesta dati al server
    // axios
    //   .get('http://localhost:8000/api/projects', {
    //     params: {
    //       page: this.currentPage,
    //     },
    //   })
    //   .then(response => {
    //     this.arrProjects = response.data.data;
    //     this.nPages = response.data.last_page;
    //   });
    this.getProjects();
    this.getTypes();
  },
  watch: {
    // "$route.query.q": {
    //   immediate: true,
    //   handler: function (newVal, oldVal) {
    //     if (newVal !== oldVal) {
    //       this.getProjects();
    //     }
    //   },
    // },

    currentPage() {
      this.getProjects();
    },
  },
};
</script>

<template>
  <form>
    <h2>Project filter</h2>
    <label for="type">Type</label>
    <select class="form-select mb-5" id="type">
      <option v-for="type in arrTypes" :key="type.id" :value="type.id">
        {{ type.name }}
      </option>
    </select>
  </form>

  <nav>
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage == 1 }">
        <a class="page-link" href="#" @click="prevPage">Previous</a>
      </li>

      <li
        v-for="page in nPages"
        :key="page"
        class="page-item cursor-pointer"
        :class="{ active: page == currentPage }"
      >
        <a class="page-link" href="#" @click="currentPage = page">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: currentPage == nPages }">
        <a class="page-link" href="#" @click="nextPage">Next</a>
      </li>
    </ul>
  </nav>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div class="col mt-3" v-for="project in arrProjects" :key="project.id">
        <ProjectCard :dataProject="project" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
