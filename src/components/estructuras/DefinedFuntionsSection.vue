<template>
    <v-container class="image">
        <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'definedFuntionsPage.title'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-5">
            <h3 class="font-weight-light" v-t="'definedFuntionsPage.paragraph'" />
        </v-row>
        <v-row align="center" class="mb-3">
            <ul>
                <li>
                    <h3 class="font-weight-light" v-t="'definedFuntionsPage.paragraph2'" />
                </li>
            </ul>
        </v-row>
        <v-row align="center" justify="center" class="mb-3">
            <v-col cols="12" md="6" align="center">
                <v-img src="@/assets/img/estructuras/definedFuntions.png" width="100%" />
            </v-col>
        </v-row>
        <v-row align="center" class="mb-2">
            <ul>
                <li>
                    <h3 class="font-weight-light" v-t="'definedFuntionsPage.paragraph3'" />
                </li>
            </ul>
        </v-row>
        <v-row align="center" justify="center" class="mb-3">
            <v-col cols="12" md="6" align="center">
                <v-img src="@/assets/img/estructuras/definedFuntions2.png" width="100%" />
            </v-col>
        </v-row>
    </v-container>
</template>