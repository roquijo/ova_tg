<template>
    <v-parallax dark src="@/assets/img/estructuras/definedFunctionsBg.jpg" height="rem" style="padding-top: 6rem; padding-bottom: 1rem;">
        <DefinedFuntionsView />
    </v-parallax>
</template>

<script>
import DefinedFuntionsView from '../../components/estructuras/DefinedFuntionsSection.vue'

export default {
    name: 'definedFuntionsView',
    components: {
        DefinedFuntionsView
    },
};
</script>