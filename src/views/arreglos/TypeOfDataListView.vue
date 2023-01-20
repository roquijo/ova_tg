<template>
    <v-parallax dark src="@/assets/img/arreglos/typeOfDataListBg.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <TypeOfDataListSection />
    </v-parallax>
</template>


<script>
import TypeOfDataListSection from '../../components/arreglos/TypeOfDataListSection.vue'

export default {

    name: 'typeOfDataListView',

    components: {
        TypeOfDataListSection
    },
};

</script>

<style>

</style>