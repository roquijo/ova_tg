<template>
    <v-parallax dark src="@/assets/img/estructuras/bgDownload.jpg" height="rem"
        style="padding-top: 6rem; padding-bottom: 1rem;">
        <ParallelListsSection />
    </v-parallax>
</template>


<script>
import ParallelListsSection from '../../components/arreglos/ParallelListsSection.vue'

export default {

    name: 'parallelListsView',

    components: {
        ParallelListsSection
    },
};

</script>

<style>

</style>