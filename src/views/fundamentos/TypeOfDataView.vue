<template>
    <v-parallax dark src="@/assets/img/fundamentos/typeOfDataBg.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <TypeOfDataSection />
    </v-parallax>
</template>

<script>
import TypeOfDataSection from '../../components/fundamentos/TypeOfDataSection.vue'

export default {
    name: 'TypeOfDataView',
    components: {
        TypeOfDataSection
    },
};
</script>