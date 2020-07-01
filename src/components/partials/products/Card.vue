<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card>
        <v-card-title thin>{{ product.title }}</v-card-title>

        <v-divider></v-divider>

        <v-img :src="product.image" height="auto" width="auto">
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >
              <router-link
                :to="{
                  name: 'product',
                  params: { id: product._id }
                }"
              >
                <v-btn>Details</v-btn>
              </router-link>
            </div>
          </v-expand-transition>
        </v-img>

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
    </v-hover>
  </div>
</template>

<script>
import mixins from "../../../mixins/mixins";
export default {
  props: ["product"],
  mixins: [mixins]
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
