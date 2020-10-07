<template>
  <v-menu v-model="showCart">
    <template v-slot:activator="{ on }">
      <v-btn text class="grey--text" dark v-bind="attrs" v-on="on">
        <v-icon>mdi-cart</v-icon>({{ cart.length }})
      </v-btn>
    </template>
    <v-container fluid>
      <v-card>
        <v-card-title>My Cart</v-card-title>
        <v-list v-for="item in cart" :key="item.id">
          <v-list-item>
            {{ item.title }} {{ item.price }} {{ item.qty }}
          </v-list-item>
          <v-btn text depressed @click="action('min', item)"
            ><v-icon>mdi-minus</v-icon></v-btn
          >
          <v-btn text depressed @click="action('add', item)"
            ><v-icon>mdi-plus</v-icon></v-btn
          >
          <v-btn text depressed @click="action('clear', item)">Remove all</v-btn>
        </v-list>
      </v-card>
    </v-container>
  </v-menu>
</template>

<script>
import api from "../config/api";
import key from "../config/stripeKey";

export default {
  data() {
    return {
      showCart: false
    };
  },
  created() {
    let total = this.total;
    this.handler = {
      key: key.PUBLISHABLE_KEY,
      image: "https://stripe.com/img/documentation/checkout/marketplace.png",
      locale: "auto",
      token: token => {
        api()
          .post("/charge", { stripeToken: token, total: total })
          .then(response => {
            let charge = response.data;
            this.$store.commit("cart/SET_CHARGE", charge);
            this.$router.push({ name: "thankyou" });
            localStorage.clear();
            this.$store.state["cart/cart"] = [];
          });
      }
    };
  },
  computed: {
    cart() {
      return this.$store.getters["cart/GET_CART"];
    },
    total() {
      let som = 0;
      this.cart.map(item => {
        som += item.subtotal;
      });
      return som;
    }
  },
  methods: {
    checkout() {
      this.handler.open({
        title: "Shopping Cart",
        amount: this.total * 100
      });
    },
    action(event, item) {
      switch (event) {
        case "add":
          item.qty++;
          item.subtotal = item.price * item.qty;
          this.$store.commit("cart/SET_QUANTITY", item);
          this.$store.commit("cart/SET_PRICE", item);
          localStorage.setItem("cart", JSON.stringify(this.cart));
          break;
        case "min":
          item.qty--;
          item.subtotal = item.price * item.qty;
          this.$store.commit("cart/SET_QUANTITY", item);
          this.$store.commit("cart/SET_PRICE", item);
          localStorage.setItem("cart", JSON.stringify(this.cart));
          if (item.qty === 0) this.clearFromCart(item);
          break;
        case "clear":
          this.clearFromCart(item);
          break;
        default:
          break;
      }
    },
    clearFromCart(product) {
      let item = this.cart.find(item => {
        return item.id === product.id;
      });
      let index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }
};
</script>
