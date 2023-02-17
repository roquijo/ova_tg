<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <v-row align="center" justify="center">
                    <br>
                    <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'identifiersPage.title'" />
                </v-row>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <h3 class="font-weight-light" v-t="'identifiersPage.paragraph'" />
        </v-row>
        <br>
        <br>
        <v-row>
            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="344">
                    <v-card-text>
                        <p class="text-h4 text--primary" v-t="'identifiersPage.titleCardVar'" />
                        <p v-for="(item, index) in $t('identifiersPage.tableVar')" :key="index">
                            {{ item }}
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="mx-auto" max-width="344">
                    <v-card-text>
                        <p class="text-h4 text--primary" v-t="'identifiersPage.titleCardConst'" />
                        <p v-for="(item, index) in $t('identifiersPage.tableConst')" :key="index">
                            {{ item }}
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <br>
        <br>
        <v-row align="center" justify="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/az0ou6hF1V8"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </v-row>
        <v-row align="center" justify="center">
            <ul class="mt-4">
                <li>
                    <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                </li>
            </ul>
            <iframe class="mb-4 mt-4" src="https://wordwall.net/es/embed/fe392949ae2842b28d221ddba127cb03?themeId=1&templateId=2&fontStackId=0"
                style="border:0px;width:80%;height:70vh" allowfullscreen="true" webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
        </v-row>
    </v-container>
</template>

<style>
p {
    font-size: large;
}
</style>