<template>
    <v-parallax dark src="@/assets/img/estructuras/globalVariablesBg.jpg" height="rem"
        style="padding-top: 6rem; padding-bottom: 1rem;">
        <GlobalVariablesSection />
    </v-parallax>
</template>


<script>
import GlobalVariablesSection from '../../components/estructuras/GlobalVariablesSection.vue'

export default {

    name: 'globalVariablesSection',

    components: {
        GlobalVariablesSection
    },
};

</script>

<style>

</style>