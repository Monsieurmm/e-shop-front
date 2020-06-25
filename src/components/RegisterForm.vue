<template>
  <v-content>
    <h1>
      Register Page
    </h1>
    <v-form>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-text-field v-model="mail" label="mail address"></v-text-field>
          <v-text-field v-model="password" label="password"></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            label="confirm your password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn @click="verify">Register</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <a href="/login">I already have an account, i log in.</a>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    mail: "",
    password: "",
    confirmPassword: ""
  }),
  methods: {
    verify() {
      if (!this.mail && !this.password && !this.confirmPassword) {
        console.log("REQUIRED");
      } else if (this.password !== this.confirmPassword) {
        window.alert("PASSWORDS IS NOT THE SAME");
      } else {
        window.alert(this.mail + " " + this.password);
      }
    }
  }
};
</script>
