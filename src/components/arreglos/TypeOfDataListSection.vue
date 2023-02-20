<template>
    <v-container class="image">
        <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'typeOfDataListPage.title'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-5">
            <h3 class="font-weight-light" v-t="'typeOfDataListPage.paragraph'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-3" v-for="(item, i) in $t('typeOfDataListPage.list')" :key="i">
            <v-col cols="12" md="6" align="center">
                <h2 class="text-justify">{{ item.title }}</h2>
                <h3 class="font-weight-light">{{ item.text }}</h3>
            </v-col>
            <v-col cols="12" md="6" align="center">
                <v-img :src="require('@/assets/img/arreglos/list' + (i + 1) + '.png')" width="80%" />
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="mt-5">
            <ul class="mt-4">
                <li>
                    <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                </li>
            </ul>
            <iframe class="mb-4 mt-4"
                src="https://wordwall.net/es/embed/de698d43071e45558723b780d4873122?themeId=1&templateId=3&fontStackId=0"
                style="border:0px;width:80%;height:80vh" allowfullscreen="true" webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
        </v-row>
    </v-container>
</template>