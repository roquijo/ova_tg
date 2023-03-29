<template>
    <v-app>
      <v-parallax dark src="@/assets/img/bgHero.jpg" height="520" class="pt-16">
        <homePage />
      </v-parallax>
      <v-main class="pt-0">
        <homeSection />
      </v-main>
    </v-app>
  </template>
  
  <script>
  import homePage from "../components/HomePage.vue";
  import homeSection from "../components/HomeSection.vue";
  
  export default {
    name: 'FundamentalsView',
    components: {
        homePage,
        homeSection
    },
  }
  </script>
  