<template>
  <div class="text-center">
    <p class="text-danger mt-5">
      You will receive an Email on {{ email }} soon, Thank you !
    </p>
    <router-link tag="a" :to="{ name: 'home' }" class="btn btn-outline-primary"
      >Back to Web site</router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      return this.$store.getters["cart/GET_CHARGE"].email;
    }
  }
};
</script>

<style></style>
