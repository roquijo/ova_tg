<template>
    <section id="homeSection">
        <div align="justify" id="principalSection">
            <v-row align="center" justify="center">
                <v-col cols="10">
                    <v-row align="center" justify="center">
                        <br>
                        <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'softwareCyclePage.title'" />
                        <v-col>
                            <h3 class="font-weight-light" justify="center" v-t="'softwareCyclePage.paragraph'" />
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
                                <v-col v-for="(item, index) in $t('softwareCyclePage.list')" :key="index" cols="12"
                                    md="6" class="d-flex align-center">
                                    <v-icon dark>mdi-check</v-icon>
                                    <span class="text-justify" v-text="item" />
                                </v-col>
                            </v-row>
                            <br>
                            <v-col cols="12" md="12" align="center" justify="center">
                                <v-img src="@/assets/img/SoftwareCycle.png" max-width="30em" />
                            </v-col>
                        </v-col>
                        <v-row align="center" justify="center">
                            <br>
                            <v-col cols="12" md="12">
                                <h3 class="font-weight-light" justify="center" v-t="'softwareCyclePage.paragraph2'" />
                            </v-col>
                            <v-col v-for="(item, index) in $t('softwareCyclePage.list2')" :key="index" cols="12" md="8"
                                class="d-flex align-center">
                                <v-icon dark>mdi-check</v-icon>
                                <span class="text-justify" v-text="item" />
                            </v-col>
                        </v-row>
                        <br>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
  
  

<script>
export default {

}
</script>

<style>
span {
    font-size: large;
}
</style>