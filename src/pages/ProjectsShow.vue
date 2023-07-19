<script>
import { store } from "../store";
import axios from "axios";
import App404 from "./App404.vue";

export default {
  components: {
    App404,
  },
  data() {
    return {
      store,
      project: null,
      is404: false,
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
        if (response.data.success) {
          this.project = response.data.results;
          console.log(response.data.results);
        } else {
          // this.$router.push({ name: 'page404' });
          this.is404 = true;
        }
      });
  },
};
// export default {
//   data() {
//     return {
//       store,
//       project: null,
//     };
//   },

//   created() {
//     axios
//       .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
//       .then((response) => {
//         this.project = response.data.results;
//       });
//   },
// };
</script>

<template>
  <div>
    <App404 v-if="is404" />
    <div v-if="project">
      <h3 class="text-danger">{{ project.title }}</h3>
      <img
        style="height: 400px; width: 400px"
        :src="this.store.getImageUrl(project.image)"
        :alt="project.title"
      />
      <li class="list-group-item">
        Technology used:
        <span v-for="tech in project.technologies" :key="tech.id">{{
          tech.name + " "
        }}</span>
      </li>
      <p>{{ project.description }}</p>
    </div>
    <!-- <div v-else>
      <p>Caricamento...</p>
    </div> -->
  </div>
</template>

<style></style>
