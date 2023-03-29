<template>
    <v-parallax dark src="@/assets/img/arreglos/operationsBg.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <OperationsSection />
    </v-parallax>
</template>

<script>
import OperationsSection from '../../components/arreglos/OperationsSection.vue'

export default {
    name: 'operationsView',
    components: {
        OperationsSection
    },
};
</script>