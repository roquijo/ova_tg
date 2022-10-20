<template>
    <v-app>
        <v-parallax dark src="@/assets/img/bgDownload.jpg" height="850">
            <AlgorithmsSection />
        </v-parallax>
    </v-app>
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