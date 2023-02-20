<template>
    <v-container class="image">
        <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'loopsPage.title'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-15">
            <h3 class="font-weight-light" v-t="'loopsPage.paragraph'" />
        </v-row>

        <row v-for="(item, i) in $t('loopsPage.list')" :key="i">
            <v-row align="center" class="mb-3">
                <h2>{{ item.title }}</h2>
            </v-row>
            <v-row align="center" class="mb-3">
                <ul>
                    <li>
                        <h3 class="font-weight-light">{{ item.text }}</h3>
                    </li>
                </ul>
            </v-row>
            <v-row align="center" justify="center" class="mb-3">
                <v-col cols="12" md="12" align="center">
                    <v-img :src="require('@/assets/img/arreglos/loops' + (i + 1) + '.png')" width="100%" />
                </v-col>
            </v-row>
            <v-row align="center" class="mb-15">
                <ul>
                    <li>
                        <h3 class="font-weight-light">{{ item.text2 }}</h3>
                    </li>
                </ul>
            </v-row>
        </row>
        <v-row align="center" justify="center" class="mb-2">
            <ul class="mt-1">
                <li>
                    <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                </li>
            </ul>
            <iframe class="mt-4"
                src="https://wordwall.net/es/embed/60bbc63e550740abb062eea7d05e4a07?themeId=1&templateId=38&fontStackId=0"
                style="border:0px;width:80%;height:80vh" allowfullscreen="true" webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
        </v-row>
    </v-container>
</template>

<style></style>