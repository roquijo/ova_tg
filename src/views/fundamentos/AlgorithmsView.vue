<template>
    <v-parallax dark src="@/assets/img/fundamentos/bgDownload.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <AlgorithmsSection />
    </v-parallax>
</template>


<script>
import AlgorithmsSection from '../../components/fundamentos/AlgorithmsSection.vue'

export default {

    name: 'algorithmsView',

    components: {
        AlgorithmsSection
    },
};

</script>

<style>

</style>