<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                <v-row align="center" justify="center">
                    <br>
                    <h2 class="display-2 font-weight-bold mb-4" justify="center"
                        v-t="'sequentialStructurePage.title'" />
                </v-row>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <h3 class="font-weight-light" v-t="'sequentialStructurePage.paragraph'" />
        </v-row>
        <br>
        <br>
        <v-row>
            <v-col cols="12" md="6" align="center">
                <v-img src="@/assets/img/fundamentos/sequentialEstructure.webp" width="40%" />
            </v-col>
            <v-col cols="12" md="6" align="center">
                <v-img src="@/assets/img/fundamentos/sequentialEstructure2.jpeg" width="70%" />
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/raYnhTaLfVo"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </v-row>
        <v-row align="center" justify="center">
            <ul class="mt-4">
                <li>
                    <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                </li>
            </ul>
            <iframe class="mb-4 mt-4" src="https://learningapps.org/watch?v=p83g3zaoa23"
                style="border:0px;width:80%;height:40vh" allowfullscreen="true" webkitallowfullscreen="true"
                mozallowfullscreen="true"></iframe>
        </v-row>
    </v-container>
</template>

<style>
p {
    font-size: large;
}
</style>