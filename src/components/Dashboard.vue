<template>
  <div>
    <h1>Dashboard</h1>
    <v-row>
      <v-col cols="12" justify="center">
        <v-btn @click="toggleProducts">Products</v-btn>
        <v-btn @click="toggleSlides">Slides</v-btn>
      </v-col>
    </v-row>
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
import Products from "./partials/dashboard/Products";
import Slides from "./partials/dashboard/Slides";
export default {
  name: "Dashboard",
  components: {
    Products,
    Slides
  },
  data() {
    return {
      component: "Products"
    };
  },
  created() {
    this.$store.dispatch("products/GET_ALL_PRODUCTS");
  },
  methods: {
    toggleProducts() {
      this.component = Products;
    },
    toggleSlides() {
      this.component = Slides;
    }
  }
};
</script>
