<template>
  <div>
    <h1>Dashboard</h1>
    <v-row>
      <v-col cols="12" justify="center">
        <v-btn @click="toggleProducts">Products</v-btn>
        <v-btn @click="toggleUsers">Users</v-btn>
        <v-btn @click="toggleSlides">Slides</v-btn>
      </v-col>
    </v-row>
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
import Products from "./partials/dashboard/Products";
import Users from "./partials/dashboard/Users";
import Slides from "./partials/dashboard/Slides";
export default {
  name: "Dashboard",
  components: {
    Products,
    Users,
    Slides
  },
  data() {
    return {
      component: "Products",
      products: []
    };
  },
  methods: {
    toggleProducts() {
      this.component = Products;
    },
    toggleUsers() {
      this.component = Users;
    },
    toggleSlides() {
      this.component = Slides;
    }
  }
};
</script>
