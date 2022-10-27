<template>
    <v-parallax dark src="@/assets/img/bgDownload.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <AlgorithmsSection />
    </v-parallax>
</template>


<script>
import AlgorithmsSection from '../components/corte1/AlgorithmsSection.vue'

export default {

    name: 'algorithmsView',

    components: {
        AlgorithmsSection
    },
};

</script>

<style>

</style>