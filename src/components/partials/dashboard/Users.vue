<template>
  <div>
    <h1>Users</h1>
    {{ users }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Users",
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState("users", ["users"])
  },
  created() {
    this.$store.dispatch("users/GET_USERS");
  }
};
</script>
