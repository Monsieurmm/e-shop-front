<template>
  <Cards :products="products" />
</template>

<script>
import Cards from "./partials/products/Cards";
import api from "../config/api";

export default {
  props: ["category"],
  data() {
    return {
      products: []
    };
  },
  components: {
    Cards
  },
  created() {
    this.fetch();
  },
  watch: {
    $route(to, from) {
      if (from.params.category !== to.params.category) {
        this.fetch();
      }
    }
  },
  methods: {
    fetch() {
      api()
        .get(`/categories/${this.category}`)
        .then(response => {
          this.products = response.data;
        });
    }
  }
};
</script>

<style scoped></style>
