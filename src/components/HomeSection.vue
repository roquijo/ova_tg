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
  </section>
</template>

