<template>
  <v-app>
    <LeftNavDrawer />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import LeftNavDrawer from "./components/partials/LeftNavDrawer";
export default {
  name: "App",

  components: {
    LeftNavDrawer
  },

  data: () => ({
    //
  })
};
</script>
