<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="icon in icons"
        :key="icon.icon"
        :href="icon.link"
        class="mx-4 indigo--text"
        icon
      >
        <v-icon size="24px">{{ icon.icon }}</v-icon>
      </v-btn>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.title"
        :href="link.route"
        color="indigo"
        text
        rounded
        class="my-2"
      >
        {{ link.title }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Made with Express and Vue</strong>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: "Home",
        route: "/"
      },
      {
        title: "Deployment",
        route: "https://cloud.google.com/"
      },
      {
        title: "API",
        route: "https://nodejs.org/en/"
      },
      {
        title: "Application",
        route: "https://vuejs.org/"
      },
      {
        title: "Contact Us",
        route: "/contact"
      }
    ],
    icons: [
      {
        icon: "mdi-facebook",
        link: "https://fr-fr.facebook.com/"
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/login?lang=fr"
      },
      {
        icon: "mdi-linkedin",
        link: "https://fr.linkedin.com/"
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/?hl=fr"
      },
      {
        icon: "mdi-tiktok",
        link: "https://www.tiktok.com/?hl=fr"
      }
    ]
  })
};
</script>
