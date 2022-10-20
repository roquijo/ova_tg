<template>
  <section id="homeSection">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <v-row>
                <v-col cols="12" md="12" class="d-flex align-center">
                  <v-img src="@/assets/img/logicalIcon.png" max-width="60px" class="mr-4" />
                  <p class="text-justify" v-t="'principalPage.paragraph2'">
                  </p>
                </v-col>
                <v-col cols="12" md="12"  class="d-flex align-center">
                  <v-img src="@/assets/img/testIcon.png" max-width="60px" class="mr-4" />
                  <p class="text-justify" v-t="'principalPage.paragraph3'">
                  </p>
                </v-col>
                <v-col cols="12" md="12"  class="d-flex align-center">
                  <iframe width="795" height="690" frameborder="0"
                    src="https://es.educaplay.com/juego/13134259-historia_definicion_y_utilidad_de_la_logica.html"></iframe>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" align="center" justify="center">
              <v-img src="@/assets/img/historyOfLogic.jpeg" max-width="25em"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

