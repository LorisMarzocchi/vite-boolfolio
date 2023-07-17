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
        : this.store.baseUrl + "storage/default.jpg";
    },
  },
};
</script>

<template>
  <div class="card mt-4" style="width: 400px">
    <img
      :src="this.store.baseUrl + 'storage/' + dataProject.image"
      class="card-img-top"
      :alt="card.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ dataProject.title }}</h5>
      <p class="card-text">{{ dataProject.description }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Type: {{ dataProject.type.name }}</li>
      <li
        class="list-group-item"
        v-for="tech in dataProject.technologies"
        :key="tech.id"
      >
        Technology used: {{ tech.name }}
      </li>
    </ul>
    <div class="dataProject-body">
      <a :href="card.link_github" class="card-link">Link Github</a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
