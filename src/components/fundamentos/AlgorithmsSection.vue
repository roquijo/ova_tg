<template>
  <section>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-row align="center">
          <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
            <v-img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />
          </v-col>
          <v-col cols="12" md="6" xl="8">
            <h2 class="display-2 font-weight-bold mb-4" v-t="'algorithmPage.title'" />
            <br>
            <h3 class="font-weight-light" v-t="'algorithmPage.paragraph'" />
            <br>
            <h3 class="font-weight-light" v-t="'algorithmPage.paragraph2'" />
            <br>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-container fluid class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" sm="4" class="text-center" v-for="(feature, i) in features" :key="i">
              <v-hover v-slot:default="{ hover }">
                <v-card class="card" shaped :elevation="hover ? 10 : 4" :class="{ up: hover }" height="470px">
                  <h1 class="font-weight-regular" v-t="'algorithmPage.paragraphTitleList' + (i + 1)" />
                  <h4 class="font-weight-regular subtitle-1" v-t="'algorithmPage.paragraphList' + (i + 1)" />
                  <br>
                  <v-img :src="feature.img" width="200px"  class="d-block ml-auto mr-auto" style="object-fit: cover;"
                    :class="{ 'zoom-efect': hover }"></v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AlgorithmsSection',
  data() {
    return {
      features: [
        {
          img: require("@/assets/img/fundamentos/algorithmPage1.jpeg"),
        },
        {
          img: require("@/assets/img/fundamentos/algorithmPage2.jpeg"),
        },
        {
          img: require("@/assets/img/fundamentos/algorithmPage3.jpeg"),
        },
      ],
    };
  },
}
</script>

<style>
h3 {
  text-align: justify;
}
</style>
