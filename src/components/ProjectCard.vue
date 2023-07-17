<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  props: {
    dataProject: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getImageUrl(image) {
      return image
        ? this.store.baseUrl + "storage/" + image
        : this.store.baseUrl + "storage/defaultImage/default.jpg";
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <img
      :src="getImageUrl(dataProject.image)"
      class="card-img-top"
      :alt="dataProject.title"
      style="height: 200px"
    />
    <div class="card-body">
      <h5 class="card-title">{{ dataProject.title }}</h5>
      <p class="card-text">{{ dataProject.description }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Type: {{ dataProject.type.name }}</li>
      <li class="list-group-item">
        Technology used:
        <span v-for="tech in dataProject.technologies" :key="tech.id">{{
          tech.name + " "
        }}</span>
      </li>
    </ul>
    <div class="dataProject-body">
      <router-link
        class="btn btn-primary m-2"
        :to="{ name: 'projects.show', params: { slug: dataProject.slug } }"
        >view</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
