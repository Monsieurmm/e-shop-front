<template>
  <div>
    <h2>Profile</h2>
    <div class="card" v-if="user">
      <ul class="list-group">
        <li class="list-group-item">Email: {{ user.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "profile",
  computed: {
    ...mapGetters("users", ["user"])
  },
  methods: {
    ...mapActions({
      GET_PROFILE: "users/GET_PROFILE"
    })
  },
  created() {
    this.GET_PROFILE();
  }
};
</script>
