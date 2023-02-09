<template>
    <v-parallax dark src="@/assets/img/arreglos/loopsBg.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <LoopsSection />
    </v-parallax>
</template>


<script>
import LoopsSection from '../../components/arreglos/LoopsSection.vue'

export default {

    name: 'loopsView',

    components: {
        LoopsSection
    },
};

</script>

<style>

</style>