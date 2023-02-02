<template>
    <section>
        <div >
            <v-row align="center" justify="center">
                <h2 class="display-2 font-weight-bold mb-4" v-t="'globalVariablesPage.title'" />
            </v-row>
        </div>
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <v-col cols="12" md="12">
                            <v-row>
                                <h3 class="mt-5 mb-5 font-weight-light" justify="center"
                                    v-t="'globalVariablesPage.paragraph'" />
                                <v-img class="mb-5" src="@/assets/img/estructuras/globalVariables.png" width="80%" />
                                <h3 class="mb-5 font-weight-light" justify="center"
                                    v-t="'globalVariablesPage.paragraph2'" />
                                <v-img class="mb-5" src="@/assets/img/estructuras/globalVariables2.png" width="80%" />
                                <h3 class="mb-5 font-weight-light" justify="center"
                                    v-t="'globalVariablesPage.paragraph3'" />
                                <v-img class="mb-5" src="@/assets/img/estructuras/globalVariables3.png" width="80%" />
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<style>
span {
    font-size: large;
}
h2{
    text-align: center;
}
</style>