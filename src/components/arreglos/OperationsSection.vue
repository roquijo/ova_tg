<template>
    <v-container class="image">
        <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'operationsPage.title'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-5">
            <h3 class="font-weight-light" v-t="'operationsPage.paragraph'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-3" v-for="(item, i) in $t('operationsPage.list')" :key="i">
            <v-col cols="12" md="6" align="center">
                <h2 class="text-justify">{{ item.title }}</h2>
                <h3 class="font-weight-light">{{ item.text }}</h3>
            </v-col>
            <v-col cols="12" md="6" align="center">
                <v-img :src="require('@/assets/img/arreglos/operations' + (i + 1) + '.png')" width="80%" />
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="mb-2">
            <h3 class="font-weight-light" v-t="'operationsPage.paragraph2'" />
            <ul class="mt-5">
                <li>
                    <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                </li>
            </ul>
            <iframe class="mt-4"
                src="https://wordwall.net/es/embed/5a13727a6e674d4fb7970b8ef64049e4?themeId=22&templateId=71&fontStackId=0"
                style="border:0px;width:80%;height:80vh" allowfullscreen="true" webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
        </v-row>
    </v-container>
</template>