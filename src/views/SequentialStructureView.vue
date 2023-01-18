<template>
    <v-parallax dark src="@/assets/img/secuencialEstructureBg.jpg" height="rem"
        style="padding-top: 6rem; padding-bottom: 1rem;">
        <SequentialStructureSection />
    </v-parallax>
</template>


<script>
import SequentialStructureSection from '../components/fundamentos/SequentialStructureSection.vue'

export default {

    name: 'SequentialStructureView',

    components: {
        SequentialStructureSection
    }
};

</script>

<style>

</style>