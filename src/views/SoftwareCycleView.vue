<template>
    <v-parallax dark src="@/assets/img/fundamentos/softwareCycleBack.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <SoftwareCycleSection />
    </v-parallax>
</template>


<script>
import SoftwareCycleSection from '../components/fundamentos/SoftwareCycleSection.vue'

export default {

    name: 'softwareCycleView',

    components: {
        SoftwareCycleSection
    },
};

</script>

<style>

</style>