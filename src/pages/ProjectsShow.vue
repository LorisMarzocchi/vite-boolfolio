<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },
  created() {
    // fai la richiesta axios
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => response.data.data);
  },
};
</script>

<template>
  <h2>show</h2>
</template>

<style></style>
