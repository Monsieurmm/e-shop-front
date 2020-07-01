<template>
  <Cards :products="products" />
</template>

<script>
import Cards from "./partials/products/Cards";
import axios from "axios";

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
      axios
        .get(`http://localhost:3000/categories/${this.category}`)
        .then(response => {
          this.products = response.data;
        });
    }
  }
};
</script>

<style scoped></style>
