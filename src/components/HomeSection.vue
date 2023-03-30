<template>
  <section id="homeSection">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="10">
          <v-row>
            <v-col cols="12" md="12" class="mb-5">
              <v-row>
                <v-col v-for="(item, index) in $t('principalPage.list')" :key="index" cols="12" md="6" align="justify">
                  <ul class="mt-4">
                    <li>
                      <strong>
                        <h3 v-text="item.title" />
                      </strong>
                      <span v-text="item.text" />
                    </li>
                  </ul>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid style="background-color: #000629;">
      <v-row justify="center">
        <v-col cols="10">
          <v-row>
            <v-col cols="12" md="12" class="mb-5 mt-4">
              <v-row>
                <v-col v-for="(item, index) in team" :key="index" cols="12" md="4" align="justify">
                  <v-img :src="item.img" width="200px" class="d-block ml-auto mr-auto" style="object-fit: cover;"
                    :class="{ 'zoom-efect': hover }"></v-img>
                  <strong>
                    <h3 class="mt-4" style="color: white; text-align: center;" v-text="item.name" />
                  </strong>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  data() {
    return {
      team: [
        {
          name: "Maria Paula Useche Carvajal",
          img: require("@/assets/img/Paula.jpeg")
        },
        {
          name: "Jorge Eliecer Rojas Quiñones",
          img: require("@/assets/img/Jorge.jpeg")
        },
        {
          name: "Gustavo Martines Villalobos",
          img: require("@/assets/img/Gustavo.jpeg")
        }
      ],
    };
  },
}
</script>