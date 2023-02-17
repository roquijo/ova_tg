<template>
    <v-container class="image">
        <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'globalVariablesPage.title'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-5">
            <h3 class="font-weight-light" v-t="'globalVariablesPage.paragraph'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-3">
            <v-col cols="12" md="8" align="center">
                <v-img class="mb-5" src="@/assets/img/estructuras/globalVariables.png" width="100%" />
            </v-col>
        </v-row>
        <v-row align="center" class="mb-3">
            <h3 class="font-weight-light" v-t="'globalVariablesPage.paragraph2'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-3">
            <v-col cols="12" md="8" align="center">
                <v-img class="mb-5" src="@/assets/img/estructuras/globalVariables2.png" width="100%" />
            </v-col>
        </v-row>
        <v-row align="center" class="mb-2">
            <h3 class="font-weight-light" v-t="'globalVariablesPage.paragraph3'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-3">
            <v-col cols="12" md="8" align="center">
                <v-img class="mb-5" src="@/assets/img/estructuras/globalVariables3.png" width="100%" />
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <ul class="mt-4">
                <li>
                    <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                </li>
            </ul>
            <iframe class="mb-4 mt-4"
                src="https://wordwall.net/es/embed/96249bbe2464492d8d8b0f1baf8e92d9?themeId=46&templateId=48&fontStackId=0"
                style="border:0px;width:80%;height:80vh" allowfullscreen="true" webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
        </v-row>
    </v-container>
</template>
<style>
span {
    font-size: large;
}

h2 {
    text-align: center;
}
</style>
