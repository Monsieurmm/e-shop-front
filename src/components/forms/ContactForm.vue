<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" lg="6" md="6" sm="12" xs="12">
        <h2>Contact form</h2>
        <v-form ref="form">
          <v-text-field v-model="name" label="Name" required></v-text-field>
          <v-text-field v-model="email" label="Email" required></v-text-field>
          <v-textarea v-model="message" label="Your message" required></v-textarea>
          <v-btn value="Submit" @click="sendMessage">Send</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "contact",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    sendMessage() {
      let msg = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      if(!this.name || !this.email || !this.message) {
          let error = "Missing credentials";
          this.$emit(
              "showSnackbar", `${error}`, "red", 4000, "top"
          );
      } else {
          axios.post("http://localhost:3000/contact", msg).then(response => {
              let msg = response.data.message;
              this.$emit("showSnackbar", `${msg}`, "green", 4000, "top");
          });
      }
    }
  }
};
</script>
