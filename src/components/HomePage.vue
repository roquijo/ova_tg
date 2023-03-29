<template >
  <div align="justify" id="principalSection">
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" xl="8">
            <h2 class="display-2 font-weight-bold mb-4" justify="center" v-t="'principalPage.title'" />
            <br>
            <h3 class="font-weight-light" justify="center" v-t="'principalPage.paragraph'" />
            <v-btn rounded outlined large dark @click="$vuetify.goTo('#homeSection')" class="mt-5"
              v-t="'principalPage.button'">
              <v-icon class="ml-2">mdi-arrow-down</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
