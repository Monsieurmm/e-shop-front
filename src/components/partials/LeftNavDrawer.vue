<template>
  <nav>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer></v-spacer>
      <router-link to="/cart">
        <v-icon>mdi-cart</v-icon>
      </router-link>
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
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "house", route: "/" },
      { title: "Account", icon: "account_box", route: "/login" },
      { title: "Products", icon: "shopping", route: "/products" }
    ]
  })
};
</script>
