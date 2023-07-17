<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      project: null,
    };
  },
  methods: {
    getImageUrl(image) {
      return image
        ? this.store.baseUrl + "storage/" + image
        : this.store.baseUrl + "storage/defaultImage/default.jpg";
    },
  },
  created() {
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  <div>
    <h2>Project</h2>
    <div v-if="project">
      <h3 class="text-danger">{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
    <div v-else>
      <p>Caricamento...</p>
    </div>
  </div>
</template>

<style></style>
