<template>
  <v-app>
    <v-app-bar
      app
      color="#0F113B"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/img/logoU.png"
          transition="scale-transition"
          width="40"
        />
        <h1>Universidad de Ibagué</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
