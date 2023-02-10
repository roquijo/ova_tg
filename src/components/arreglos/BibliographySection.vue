<template>
    <v-container class="image">
        <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'bibliographyPage.title'" />
        </v-row>
        <v-row align="center" class="mb-3">
            <ul>
                <li cols="12" md="6" v-for="(item, i) in $t('bibliographyPage.list')" :key="i" class="mb-4">
                    <h3 class="font-weight-light">{{ item }}</h3>
                </li>
            </ul>
        </v-row>
    </v-container>
</template>

<style>
.video-responsive {
    overflow: hidden;
    padding-bottom: 400px;
    /* Adecua este valor para controlar la altura del video */
    position: relative;
    height: 0;
}

.video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
}
</style>