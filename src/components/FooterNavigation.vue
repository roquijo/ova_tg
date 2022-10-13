<template>
    <v-footer style="text-align: center; padding: 0; display: block;" class="p-0">
        <v-card flat color="#0F113B">
            <v-card-text style="{text-align: center;}">
                <v-btn v-for="icon in icons" :key="icon" icon>
                    <v-icon size="24px" style="color: white;">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text style="color: white;">
                Ova Lógica Algorítmica
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text style="color: white;">
                {{ new Date().getFullYear() }}  <strong>Universidad de Ibagué</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {

    name: 'FooterNavigation',

    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>