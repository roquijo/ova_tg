<template>
  <v-app>
    <v-parallax dark src="@/assets/img/arreglos/operationsBg.jpg" height="450" class="pt-16">
      <fundamentals />
    </v-parallax>
    <v-main class="pt-0">
      <fundamentalsSection />
    </v-main>
  </v-app>
</template>

<script>
import fundamentals from "../../components/fundamentos/FundamentalsPage.vue";
import fundamentalsSection from "../../components/fundamentos/FundamentalsSection.vue";

export default {
  name: 'FundamentalsView',
  components: {
    fundamentals,
    fundamentalsSection
  },
}
</script>
