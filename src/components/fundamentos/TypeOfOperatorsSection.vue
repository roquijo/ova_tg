<template>
    <section>
        <v-row align="center" justify="center">
            <v-col cols="10">
                <v-row align="center">
                    <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
                        <v-img src="@/assets/img/fundamentos/typeOperators.jpg" class="d-block ml-auto mr-auto"
                            max-width="350px" />
                    </v-col>
                    <v-col cols="12" md="6" xl="8">
                        <h2 class="display-2 font-weight-bold mb-4" v-t="'typeOfOperatorsPage.title'" />
                        <br>
                        <h3 class="font-weight-light" v-t="'typeOfOperatorsPage.paragraph'" />
                        <br>
                        <ul>
                            <li>
                                <a href="https://www.cerebriti.com/juegos-de-matematicas/tipos-de-operadores"
                                    target="_blank" style="color: yellow;">
                                    <h3 class="font-weight-bold" v-t="'typeOfOperatorsPage.paragraph2'" />
                                </a>
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-container fluid class="mt-2">
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="space-around">
                        <v-col cols="12" sm="4" class="text-center"
                            v-for="(item, index) in $t('typeOfOperatorsPage.titleList')" :key="index">
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="card" shaped :elevation="hover ? 10 : 4" :class="{ up: hover }"
                                    height="490px">
                                    <h1 class="font-weight-regular"> {{ item }}</h1>
                                    <br>
                                    <p v-for="(item, index) in $t('typeOfOperatorsPage.textList' + (index + 1))"
                                        :key="index">
                                        {{ item }}
                                    </p>
                                    <br>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-col>
                <ul class="mt-4">
                    <li>
                        <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                    </li>
                </ul>
                <iframe class="mb-4 mt-4"
                    src="https://wordwall.net/es/embed/b2201127a5e34be38e2db509089a9127?themeId=1&templateId=2&fontStackId=0"
                    style="border:0px;width:80%;height:80vh" allowfullscreen="true" webkitallowfullscreen="true"
                    mozallowfullscreen="true"></iframe>
            </v-row>
        </v-container>
    </section>
</template>

<style>
a {
    font-size: larger;
}
</style>
