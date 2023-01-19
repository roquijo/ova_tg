<template>
    <v-container class="image">
        <v-row align="center" justify="center">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'repetitiveStructurePage.title'" />
        </v-row>
        <v-row align="center" justify="center" class="mb-5">
            <h3 class="font-weight-light" v-t="'repetitiveStructurePage.paragraph'" />
        </v-row>
        <v-row align="center" class="mb-3">
            <h2 v-t="'repetitiveStructurePage.paragraphTitle1'" />
        </v-row>
        <v-row align="center" class="mb-3">
            <ul>
                <li>
                    <h3 class="font-weight-light" v-t="'repetitiveStructurePage.paragraph2'" />
                </li>
            </ul>
        </v-row>
        <v-row align="center" justify="center" class="mb-3">
            <v-col cols="12" md="6" align="center">
                <v-img src="@/assets/img/estructuras/while.png" width="80%" />
            </v-col>
            <v-col cols="12" md="6" align="center" class="video-responsive">
                <iframe src="https://www.youtube.com/embed/cuFSVjo9oi0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </v-col>
        </v-row>
        <v-row align="center" class="mb-3">
            <h2 v-t="'repetitiveStructurePage.paragraphTitle2'" />
        </v-row>
        <v-row align="center" class="mb-2">
            <ul>
                <li>
                    <h3 class="font-weight-light" v-t="'repetitiveStructurePage.paragraph3'" />
                </li>
            </ul>
        </v-row>
        <v-row align="center" justify="center" class="mb-3">
            <v-col cols="12" md="6" align="center">
                <v-img src="@/assets/img/estructuras/for.png" width="80%" />
            </v-col>
            <v-col cols="12" md="6" align="center" class="video-responsive">
                <iframe src="https://www.youtube.com/embed/ywIVQBaPRYk" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
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