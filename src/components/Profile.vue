<template>
  <div>
    <h2>Profile</h2>
    <div class="card" v-if="user">
      <ul class="list-group">
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Name: {{ user.name }}</li>
        <li class="list-group-item">Address: {{ user.address }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "profile",
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
