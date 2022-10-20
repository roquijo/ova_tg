<template>
  <v-select id="locale" v-model="$i18n.locale" :items="locales" outlined append-outer-icon="mdi-translate"
    item-text="label" item-value="key" single-line style="position: relative;"></v-select>
</template>
  
<script>
export default {
  data: () => ({
    locales: [
      { key: "es", label: "Español" },
      { key: "en", label: "English" }
    ]
  }),
  watch: {
    "$i18n.locale": {
      handler(locale) {
        localStorage.setItem("locale", locale);
      }
    }
  }
};
</script>
