<template>
    <v-container>
        <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'bibliographyPage.title'" />
        </v-row>
        <v-row align="center" class="mb-4" justify="center">
            <ul class="mb-4" v-for="(item, i) in $t('bibliographyPage.list')" :key="i">
                <li class="mb-3">
                    <h3 style="width: 75vw;" class="font-weight-light">{{ item }}</h3>
                </li>
            </ul>
        </v-row>
    </v-container>
</template>

<style>
h3 {
    word-wrap: break-word;
}
</style>