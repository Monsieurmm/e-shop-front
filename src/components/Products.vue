<template>
  <div>
    <Cards :products="products" />
  </div>
</template>

<script>
  import Cards from "./partials/products/Cards";
  import api from "../config/api";
  export default {
    components: {
      Cards
    },
    data() {
      return {
        products: [],
      }
    },
    created() {
      this.getAllProductsData();
    },
    methods: {
      getAllProductsData() {
        api().get("/products/all").then(response => {
          this.products = response.data;
        });
      }
    }
  }
</script>
