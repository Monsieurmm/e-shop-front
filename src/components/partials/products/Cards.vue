<template>
  <div>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="product in products"
        :key="product._id"
      >
        <Card :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  props: ["products"],
  components: {
    Card
  }
};
</script>
