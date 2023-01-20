<template>
    <v-parallax dark src="@/assets/img/fundamentos/IdentifiersBg.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <IdentifiersSection />
    </v-parallax>
</template>


<script>
import IdentifiersSection from '../../components/fundamentos/IdentifiersSection.vue'

export default {

    name: 'IdentifiersView',

    components: {
        IdentifiersSection
    },
};

</script>

<style>

</style>