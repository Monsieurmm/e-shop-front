<template>
  <nav>
    <v-app-bar color="white" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <router-link :to="{ name: 'home' }" class="black--text"
        >Dummy shop</router-link
      >
      <v-spacer></v-spacer>
      <v-list flat v-for="category in categories" :key="category._id">
        <v-list-item>
          <router-link
            :to="{ name: 'category', params: { category: category.title } }"
            class="black--text"
            >{{ category.title }}</router-link
          >
        </v-list-item>
      </v-list>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn text class="grey--text" dark v-bind="attrs" v-on="on">
            <v-icon>mdi-cart</v-icon>({{ cart.length }})
          </v-btn>
        </template>
        <Checkout />
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary absolute>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title align="right">{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <router-link :to="{ name: 'login' }" v-if="!isLoggedIn"
              >Log in</router-link
            >
            <a to="/logout" v-if="isLoggedIn" @click.prevent="logoutUser">
              <v-icon>how_to_reg</v-icon>
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Checkout from "../Checkout";
import api from "../../config/api";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Checkout
  },
  data: () => ({
    categories: [],
    menu: false,
    drawer: false,
    items: [
      { title: "Home", icon: "house", route: "/" },
      { title: "Products", icon: "shopping", route: "/products" },
      { title: "Contact us", icon: "book", route: "/contact" }
    ]
  }),
  created() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      api()
        .get("/categories")
        .then(response => {
          this.categories = response.data;
        });
    },
    ...mapActions({
      LOGOUT: "users/LOGOUT"
    }),
    logoutUser() {
      this.LOGOUT();
    }
  },
  computed: {
    cart() {
      return this.$store.getters["cart/GET_CART"];
    },
    ...mapGetters({
      isLoggedIn: "users/isLoggedIn"
    })
  }
};
</script>
