<template>
  <div>
    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-title thin>{{ product.title }}</v-card-title>

          <v-divider></v-divider>

          <v-img :src="product.image" height="auto" width="auto" />

          <v-list-item>
            <v-rating
              :value="product.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>

          <v-list-item>
            <v-list-item-content class="font-weight-bold"
              >{{ product.price }}€</v-list-item-content
            >
          </v-list-item>

          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" align="center">
              <v-btn
                @click="addToCart(product)"
                align="center"
                color="blue lighten-2"
                rounded
                >Add to Cart</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import api from "../config/api";
import mixins from "../mixins/mixins";

export default {
  props: ["id"],
  mixins: [mixins],
  data() {
    return {
      product: {}
    };
  },
  created() {
    api()
      .get(`/products/${this.id}`)
      .then(response => {
        this.product = response.data;
      });
  },
  methods: {
    checkout(e) {
      e.preventDefault();
      this.$router.push({ name: "checkout" });
      console.log(e);
    }
  }
};
</script>

<style></style>
