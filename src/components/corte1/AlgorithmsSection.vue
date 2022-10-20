<template>
  <section id="hero">
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
                <v-card class="card" shaped :elevation="hover ? 10 : 4" :class="{ up: hover }">
                  <v-img :src="feature.img" max-width="100px" class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <youtube :video-id="videoId" @ready="ready" @playing="playing"></youtube>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  name: 'AlgorithmsSection',
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Design Limpo",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Dados Seguros",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "Código Aberto",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
