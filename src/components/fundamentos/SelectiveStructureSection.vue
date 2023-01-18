<template>
    <v-container class="image">
        <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'selectiveStructurePage.title'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-5">
            <h3 class="font-weight-light" v-t="'selectiveStructurePage.paragraph'" />
        </v-row>
        <v-row align="center" class="mb-3">
            <ul>
                <li>
                    <h3 class="font-weight-light" v-t="'selectiveStructurePage.paragraph2'" />
                </li>
            </ul>
        </v-row>
        <v-row align="center" justify="center" class="mb-3">
            <v-col cols="12" md="6" align="center" class="video-responsive">
                <iframe src="https://www.youtube.com/embed/M13eq6T-2Nc" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </v-col>
            <v-col cols="12" md="6" align="center">
                <v-img src="@/assets/img/fundamentos/selectiveStructureImg.png" width="80%" />
            </v-col>
        </v-row>
        <v-row align="center" class="mb-2">
            <ul>
                <li>
                    <h3 class="font-weight-light" v-t="'selectiveStructurePage.paragraph3'" />
                </li>
            </ul>
        </v-row>
        <v-row align="center" justify="center" class="mb-3">
            <v-col cols="12" md="6" align="center" class="video-responsive">
                <iframe src="https://www.youtube.com/embed/apcIsaX3aDg" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </v-col>
            <v-col cols="12" md="6" align="center">
                <v-img src="@/assets/img/fundamentos/selectiveStructureImg2.png" width="80%" />
            </v-col>
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