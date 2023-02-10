<template>
    <v-parallax dark src="@/assets/img/arreglos/loopsBg.jpg" height="rem"
        style="padding-top: 6rem; padding-bottom: 1rem;">
        <BibliographySection />
    </v-parallax>
</template>


<script>
import BibliographySection from '../../components/arreglos/BibliographySection.vue'

export default {

    name: 'bibliographyView',

    components: {
        BibliographySection
    },
};

</script>

<style>

</style>