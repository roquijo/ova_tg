<template >
  <div  align="justify" id="algorithmsSection" style="position: relative; top: 20%; height: 100%;">
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
              <v-col sm="4" class="hidden-xs-only">
                <v-img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />
              </v-col>
              <v-col cols="12" sm="8" class="white--text text-left">
                <h1 class="font-weight-light display-2 mb-2" v-t="'algorithmPage.title'" />
                <br>
                <h3 class="font-weight-light" justify="center" v-t="'algorithmPage.paragraph'" />
                <br>
                <h3 class="font-weight-light" justify="center" v-t="'algorithmPage.paragraph2'" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AlgorithmsSection',
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
}
</script>

<style>


</style>
