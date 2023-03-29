<template>
    <v-parallax dark src="@/assets/img/estructuras/repetitiveEstructureBg.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <RepetitiveStructureSection />
    </v-parallax>
</template>

<script>
import RepetitiveStructureSection from '../../components/estructuras/RepetitiveStructureSection.vue'

export default {
    name: 'repetitiveStructureView',
    components: {
        RepetitiveStructureSection
    },
};
</script>