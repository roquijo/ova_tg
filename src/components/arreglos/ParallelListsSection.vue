<template>
    <section>
        <div align="justify">
            <v-row align="center" justify="center">
                <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'parallelListsPage.title'" />
            </v-row>
        </div>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="12">
                            <v-row>
                                <h3 class="mt-5 mb-5 font-weight-light" justify="center"
                                    v-t="'parallelListsPage.paragraph'" />
                                <v-img class="mb-5" src="@/assets/img/arreglos/parallelListEjp.png" width="80%" />
                                <h3 class="mb-5 font-weight-light" justify="center" v-t="'parallelListsPage.paragraph2'" />
                                <v-img class="mb-5" src="@/assets/img/arreglos/parallelList.png" width="60%" />
                                <h3 class="mb-5 font-weight-light" justify="center" v-t="'parallelListsPage.paragraph3'" />
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                <ul class="mt-4">
                    <li>
                        <h2 style="color: yellow;" class="font-weight-bold" v-t="'test'" />
                    </li>
                </ul>
                <iframe class="mb-4 mt-4"
                    src="https://wordwall.net/es/embed/5b269e52959b41dbba0ceaee889f078f?themeId=22&templateId=45&fontStackId=0"
                    style="border:0px;width:80%;height:80vh" allowfullscreen="true" webkitallowfullscreen="true"
                    mozallowfullscreen="true"></iframe>
            </v-row>
        </v-container>
    </section>
</template>
<style>
span {
    font-size: large;
}
</style>