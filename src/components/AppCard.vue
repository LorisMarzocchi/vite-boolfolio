<script>
export default {
  props: {
    DataCard: Object,
  },
};
</script>

<template>
  <div
    v-for="card in this.DataCard"
    :key="card.id"
    class="card"
    style="width: 400px"
  >
    <img
      :src="'http://localhost:8000/storage/' + card.image"
      class="card-img-top"
      :alt="card.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ card.title }}</h5>
      <p class="card-text">{{ card.description }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Type: {{ card.type.name }}</li>
      <li
        class="list-group-item"
        v-for="tech in card.technologies"
        :key="tech.id"
      >
        Technologies: {{ tech.name }}
      </li>
    </ul>
    <div class="card-body">
      <a :href="card.link_github" class="card-link">Link Github</a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
