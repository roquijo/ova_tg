<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <v-row align="center" justify="center">
                    <br>
                    <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'typeOfDataPage.title'" />
                </v-row>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <h3 class="font-weight-light" v-t="'typeOfDataPage.paragraph'" />
        </v-row>
        <br>
        <br>
        <v-row align="center">
            <h3 class="font-weight-light" v-t="'typeOfDataPage.paragraph2'" />
        </v-row>
        <br>
        <br>
        <v-row align="center" justify="center">
            <v-img src="@/assets/img/fundamentos/typeOfData.png" width="80%" />
        </v-row>
        <br>
        <br>
        <v-row align="center" justify="center" class="mb-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_lNtSsEcnwc"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </v-row>
        <v-row align="center" justify="center">
            <ul class="mt-4 mb-4">
                <li>
                    <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                </li>
            </ul>
            <iframe src="https://learningapps.org/watch?v=pobjhhou323" style="border:0px;width:80%;height:42vh"
                allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        </v-row>
    </v-container>
</template>