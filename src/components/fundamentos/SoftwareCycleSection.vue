<template>
    <section>
        <div align="justify">
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <br>
                        <h2 class="display-2 font-weight-bold mb-4" justify="center"
                            v-t="'softwareLifeCyclePage.title'" />
                        <v-col>
                            <h3 class="font-weight-light" justify="center" v-t="'softwareLifeCyclePage.paragraph'" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="7">
                            <v-row>
                                <v-col v-for="(item, index) in $t('softwareLifeCyclePage.list')" :key="index" cols="12"
                                    md="6" class="d-flex align-center">
                                    <v-icon dark>mdi-check</v-icon>
                                    <span class="text-justify" v-text="item" />
                                </v-col>
                            </v-row>
                            <br>
                            <v-col cols="12" md="12" align="center" justify="center">
                                <v-img src="@/assets/img/fundamentos/softwareCycle.png" max-width="30em" />
                            </v-col>
                        </v-col>
                        <v-row align="center" justify="center">
                            <br>
                            <v-col cols="12" md="12">
                                <h3 class="font-weight-light" justify="center"
                                    v-t="'softwareLifeCyclePage.paragraph2'" />
                            </v-col>
                            <v-col v-for="(item, index) in $t('softwareLifeCyclePage.list2')" :key="index" cols="12"
                                md="8" class="d-flex align-center">
                                <ul class="mt-4">
                                    <li>
                                        <strong><h3 class="text-justify" v-text="item.title" /></strong>
                                        <span class="text-justify" v-text="item.text" />
                                    </li>
                                </ul>
                            </v-col>
                        </v-row>
                        <br>
                    </v-row>
                </v-col>
                <ul class="mt-4 mb-4">
                    <li>
                        <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                    </li>
                </ul>
                <iframe src="https://learningapps.org/watch?v=pys3zz72a23" style="border:0px;width:80%;height:80vh"
                    allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </v-row>
        </v-container>
    </section>
</template>
<style>
span {
    font-size: large;
}
</style>