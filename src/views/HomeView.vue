<template>
  <v-app>
    <v-parallax dark src="@/assets/img/bgHero.jpg" height="550">
      <home />
    </v-parallax>
    <v-main class="pt-0">
      <homeSection />
    </v-main>
  </v-app>
</template>

<script>
import home from "../components/PrincipalPage.vue";
import homeSection from "../components/HomeSection.vue";

export default {
  name: 'HomeView',

  components: {
    home,
    homeSection
  },
}

</script>
