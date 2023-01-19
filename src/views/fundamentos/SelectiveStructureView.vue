<template>
    <v-parallax  src="@/assets/img/fundamentos/selectiveStructureBg.png" height=""
        style="padding-top: 6rem; padding-bottom: 1rem;">
        <SelectiveStructureSection />
    </v-parallax>
</template>


<script>
import SelectiveStructureSection from '../components/fundamentos/SelectiveStructureSection.vue'

export default {

    name: 'selectiveStructureView',

    components: {
        SelectiveStructureSection
    },
};

</script>

<style>

</style>